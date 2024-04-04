<template>
    <div class="row pt-5">
        <div class="col-6 d-flex flex-column justify-content-center">
            <h1 class="display-1 mt-n3">{{ page.acf?.page_title }}</h1>
            <p class="display-5 pb-5">{{ page.acf?.page_sub_title }}</p>
        </div>

        <Package class="mb-4" v-for="bundle in packages" :package="bundle"/>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, inject } from 'vue';
import { usePackages } from '@/composables/usePackages'
import { usePages } from '@/composables/usePages'
import { useMedias } from '@/composables/useMedias'
import type { Package as Bundle, Packages } from '@/types/Packages'
import Package from './Package.vue'
// import type { Media } from '@/types/Media.ts'
import { useCallToActions } from '@/composables/useCallToActions';

const cta = inject('cta') as ReturnType<typeof useCallToActions>;
const usePackage = usePackages()
const useMedia = useMedias()
const usePage = usePages()
const page = reactive({}) as Packages
const packages = ref<Bundle[]>([])

onMounted(async () => {
    Object.assign(page, await usePage.api.getPageBySlug('packages'))
    // Object.assign(herobanner, await useMedia.api.getMediaByID(home.featured_media))
    // Object.assign(heroSquareImage, await useMedia.api.getMediaByID(home.acf.square_header_image))
    cta.update(page)
    packages.value = await usePackage.api.getAll()
})
</script>

<style scoped>
</style>