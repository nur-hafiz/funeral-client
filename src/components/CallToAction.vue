<template>
    <div v-if="page" class="my-5 py-4 d-flex flex-column align-items-center justify-content-center call-to-action">
        <h5 v-if="title" class="display-5 mb-3">{{ title }}</h5>
        <h6 v-if="sub_title" class="lead mb-3">{{ sub_title }}</h6>
        <router-link v-if="button_label && slug" :to="slug">
            <Button class="position-relative" style="top: -1px" :label="button_label" />
        </router-link>
    </div>
</template>

<script setup lang="ts">
import type { Page } from '@/types/Page.ts'
import { onMounted } from 'vue';
import { useCallToActions } from '@/composables/useCallToActions'
const { format, fetchSlug, slug, title, sub_title, button_label } = useCallToActions()
const props = defineProps<{
    page: Page
}>();

onMounted(async () => {
    await fetchSlug(props.page.id)
    format(props.page)
})
</script>

<style scoped>
.call-to-action {
    background-color: #CCCCCC;
}
</style>