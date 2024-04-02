<template>
    <div class="row">
        <div class="offset-lg-2 col-lg-3">
            <img v-if="founderImage.guid" :src="founderImage.guid.rendered" :alt="founderImage.alt_text">
            <h3 class="lead text-center">{{ about.acf.founder_name }}</h3>
        </div>
        <div class="col-lg-5">
            <h2 class="display-4 mb-4">{{ about.acf.founding_header }}</h2>
            <p>{{ about.acf.founding_excerpt }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import type { Media } from '@/types/Media.ts'
import type { About } from '@/types/About';
import { useMedias } from '@/composables/useMedias'

const useMedia = useMedias()
const founderImage = reactive({}) as Media;

const props = defineProps<{
    about: About;
}>();

onMounted(async () => {
    Object.assign(founderImage, await useMedia.api.getMediaByID(props.about.acf.founder_image))
})
</script>