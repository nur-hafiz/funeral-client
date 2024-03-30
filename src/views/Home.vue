<template>
    <h1>Welcome to Funeral Service</h1>
    <Service v-for="service in services" :key="service.id" :service="service"/>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useServices } from '@/composables/useServices'
import Service from './home/Service.vue';
import type { Service as ServiceType } from '@/types/Services.ts'

const { api } = useServices()

const services = ref<ServiceType[]>([])

onMounted(async () => {
    services.value = await api.getAll()
})
</script>