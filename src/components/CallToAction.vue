<template>
    <div v-if="title.length && sub_title.length && button_label.length && slug.length" class="text-center my-5 py-4 d-flex flex-column align-items-center justify-content-center call-to-action">
        <h5 v-if="title.length" class="display-5 mb-3 pt-5">{{ title }}</h5>
        <h6 v-if="sub_title.length" class="lead mb-3">{{ sub_title }}</h6>
        <router-link class="mb-5" v-if="button_label.length && slug.length" :to="slug">
            <Button class="position-relative" style="top: -1px" :label="button_label" />
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { useCallToActions } from '@/composables/useCallToActions';
const cta = inject('cta') as ReturnType<typeof useCallToActions>;
const { title, sub_title, slug, button_label } = cta
</script>

<style scoped>
.call-to-action {
    background-color: #CCCCCC;
}
</style>