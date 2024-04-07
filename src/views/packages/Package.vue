<template>
    <Card v-if="bundle.title">
        <template #title>{{ bundle.title.rendered }} - SGD {{ price }}</template>
        <template #content>
            <ul class="m-0 mb-3 p-0">
                <li style="list-style: unset; list-style-position: inside;" v-for="service in fetchedServices" :key="service.id">{{ service.title.rendered }}</li>
            </ul>

            <a target="_blank" rel="noopener" :href="'https://wa.me/' + format.whatsapp(contactInformation.contact_number)">
                <Button label="Whatsapp" />
            </a>
        </template>
    </Card>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { ref, reactive, onMounted, inject } from 'vue'
import type { Service } from '@/types/Services'
import type { Package } from '@/types/Packages';
import type { Contact } from '@/types/Contact';
import { usePackages } from '@/composables/usePackages'
import { useServices } from '@/composables/useServices';
import { useContacts } from '@/composables/useContacts';
const { format } = useContacts()
const usePackage = usePackages()
const useService = useServices()

const contactInformation = inject('contactInformation') as Contact['acf']

const props = defineProps<{
    package: Package;
}>();

// wanted to name it package but package is a reserved keyword
const bundle= reactive({}) as Package;
const price: Ref<number> = ref(0);
const fetchedServices: Ref<Service[]> = ref([])

const getServicesDetails = async (services: number[]) => {
    // Map each service ID to a fetch operation
    const fetchPromises = services.map(serviceId => {
        return useService.api.getServiceByID(serviceId);
    });

    // Use Promise.all to wait for all fetch operations to complete
    const results = await Promise.all(fetchPromises);

    // Process each result
    results.forEach(data => {
        price.value += Number(data.acf.price);
        fetchedServices.value.push(data);
    });
}

onMounted(async () => {
    const data = await usePackage.api.getPackageByID(props.package.id)
    Object.assign(bundle, data)
    getServicesDetails(bundle.services)
})
</script>