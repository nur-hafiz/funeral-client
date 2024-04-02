<template>
    <div class="container-fluid">
        <div class="row pt-5">
            <div class="d-flex flex-column align-items-center justify-content-center mb-5">
                <h1 class="display-2 mt-n3">{{ about.acf?.page_title }}</h1>
                <p class="display-6 pb-5">{{ about.acf?.page_sub_title }}</p>
            </div>

            <Founder v-if="about.acf" :about="about" class="mt-4 mb-5"/>
            <Team v-if="about.acf" :about="about" class="mt-5 mb-5"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { usePages } from '@/composables/usePages'
import type { About } from '@/types/About';
import Founder from './Founder.vue';
import Team from './Team.vue';

const usePage = usePages()
const about = reactive({}) as About

onMounted(async () => {
    Object.assign(about, await usePage.api.getPageBySlug('about'))
})
</script>

<style scoped>
</style>