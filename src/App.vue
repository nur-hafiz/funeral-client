<template>
      <Menubar :model="items" id="navbar" class="px-4">
        <template #start>
            <router-link :to="'/'" class="me-auto">
                <img id="nav-logo" :src="'/logo.png'" alt="company logo">
            </router-link>
        </template>

        <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </router-link>

        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
        </template>
      </Menubar>

    <main class="pb-4 px-4">
        <RouterView />
    </main>

    <CallToAction />

    <footer class="px-4 d-flex justify-content-between">
        <span>Funeral Service Company © Since 1998</span>
        <ul class="d-flex">
            <li v-for="social in socials" class="socials">
                <a class="d-block" :href="social.acf.link" target="_blank">
                    <i :class="icon(social.title.rendered)" style="font-size: 20px;" />
                </a>
            </li>
        </ul>
    </footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menubar from 'primevue/menubar';
import { ref, provide, onMounted } from "vue";
import { useCallToActions } from '@/composables/useCallToActions'
import { useSocials } from '@/composables/useSocials'
import { useContacts } from '@/composables/useContacts'
import CallToAction from './components/CallToAction.vue';

const useCTA = useCallToActions()
const useSocial = useSocials()
const useContact = useContacts()

const { socials, icon } = useSocial
const { contactInformation } = useContact

onMounted(async () => {
    useSocial.api.getAll()
    useContact.api.getContactInformation()
})

provide('cta', useCTA)
provide('socials', socials)
provide('socialsIcon', icon)
provide('contactInformation', contactInformation)

const items = ref([
    {
        label: 'Home',
        route: '/'
    },
        {
        label: 'About',
        route: '/about'
    },
    {
        label: 'Packages',
        route: '/packages'
    },  
    {
        label: 'Contact',
        route: '/contact'
    }  
    // {
    //     label: 'Services',
    //     icon: 'pi pi-link',
    //     items: [
    //         {
    //             label: 'Packages',
    //             route: '/packages'
    //         },
    //         {
    //             label: 'Services',
    //             route: '/services'
    //         }
    //     ]
    // },
]);
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.socials a {
    width: 25px;
    height: 25px;
}

.p-menubar-start {
    margin-right: 1rem;

    @include media-breakpoint-up(lg) {
        margin-right: 1.5rem;
    }
}

#nav-logo {
    height: 50px;

    @include media-breakpoint-up(lg) {
        height: 70px;
    }
}
</style>
