<template>
    <div class="header d-flex flex-column justify-content-start justify-content-lg-center position-relative mt-5">
        <div class="header-text col-10 col-lg-6 mt-2 mt-lg-0 p-4 ">
            <h1 class="display-1 mt-n3">{{ home.acf?.page_title }}</h1>
            <p class="display-5 pb-5">{{ home.acf?.page_sub_title }}</p>
            <router-link to="/packages">
                <Button class="position-relative" style="top: -1px" label="Learn more about our services" />
            </router-link>
        </div>

        <img class="position-absolute" v-if="herobanner.guid" :src="herobanner.guid.rendered" :alt="herobanner.alt_text">
        <img class="position-absolute" v-if="heroSquareImage.guid" :src="heroSquareImage.guid.rendered" :alt="heroSquareImage.alt_text">
    </div>

    <Support />
    <!-- <Service v-for="service in services" :key="service.id" :service="service"/> -->
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, inject } from 'vue';
import { useServices } from '@/composables/useServices'
import Support from './Support.vue'
import { usePages } from '@/composables/usePages'
import { useMedias } from '@/composables/useMedias'
import type { Service as ServiceType } from '@/types/Services.ts'
import type { Home } from '@/types/Home.ts'
import type { Media } from '@/types/Media.ts'
import { useCallToActions } from '@/composables/useCallToActions';
const cta = inject('cta') as ReturnType<typeof useCallToActions>;
const { api } = useServices()
const useMedia = useMedias()
const usePage = usePages()
const home = reactive({}) as Home
const herobanner = reactive({}) as Media;
const heroSquareImage = reactive({}) as Media;
const services = ref<ServiceType[]>([])

onMounted(async () => {
    Object.assign(home, await usePage.api.getPageBySlug('home'))
    Object.assign(herobanner, await useMedia.api.getMediaByID(home.featured_media))
    Object.assign(heroSquareImage, await useMedia.api.getMediaByID(home.acf.square_header_image))
    cta.update(home)
    services.value = await api.getAll()
})
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.header {
    height: 500px;

    img:nth-of-type(1) {
        top: 60px;
        right: 0;
    }

    img:nth-of-type(2) {
        right: 0;
        border: 10px solid #F5F5F5;
        top: 200px;
        height: 250px;
        width: 250px;
    }


    @include media-breakpoint-up(md) {
        img:nth-of-type(2) {
            border: 15px solid #F5F5F5;
            top: 250px;
            height: 300px;
            width: 300px;
        }
    }
    
    @include media-breakpoint-up(lg) {
        height: 700px;

        img {
            height: 400px;
            width: unset;
        }

        img:nth-of-type(1) {
            top: 10px;
            right: 30px;
        }

        img:nth-of-type(2) {
            border: 15px solid #F5F5F5;
            width: unset;
            top: 200px;
        }
    }
}

.header-text {
    z-index: 1;
    background: rgba(255, 255, 255, 0.6)
}
</style>