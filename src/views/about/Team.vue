<template>
    <div class="row">
        <div class="col-lg-5 offset-lg-2">
            <h2 class="display-4 mb-4 text-end">{{ about.acf.team_section_title }}</h2>
            <p class="text-end">{{ about.acf.team_description }}</p>
        </div>

        <div class="offset-lg-1 col-lg-3">
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