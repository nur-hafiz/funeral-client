<template>
      <Menubar :model="items" id="navbar">
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

    <main>
        <RouterView />
    </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menubar from 'primevue/menubar';
import { ref } from "vue";

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
        label: 'Services',
        icon: 'pi pi-link',
        items: [
            {
                label: 'Packages',
                route: '/packages'
            },
            {
                label: 'Services',
                route: '/services'
            }
        ]
    },
]);
</script>
