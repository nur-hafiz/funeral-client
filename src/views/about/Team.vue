<template>
    <div class="row">
        <div class="offset-md-1 col-md-5 offset-lg-2">
            <h2 class="display-4 mb-4 text-end">{{ about.acf.team_section_title }}</h2>
            <img class="d-md-none mb-4" v-if="teamImage.guid" :src="teamImage.guid.rendered" :alt="teamImage.alt_text">
            <p class="text-end">{{ about.acf.team_description }}</p>
        </div>

        <div class="d-none d-md-block offset-md-1 col-md-5 col-lg-4">
            <img v-if="teamImage.guid" :src="teamImage.guid.rendered" :alt="teamImage.alt_text">
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import type { Media } from '@/types/Media.ts'
import type { About } from '@/types/About';
import { useMedias } from '@/composables/useMedias'

const useMedia = useMedias()
const teamImage = reactive({}) as Media;

const props = defineProps<{
    about: About;
}>();

onMounted(async () => {
    Object.assign(teamImage, await useMedia.api.getMediaByID(props.about.acf.team_image))
})
</script>