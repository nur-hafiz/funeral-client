<template>
  <div class="row">
    <div class="header-text mt-2 mt-lg-0 p-4 text-center">
      <h1 class="display-1 mt-n3">{{ page.acf?.page_title }}</h1>
      <p class="display-5 pb-5">{{ page.acf?.page_sub_title }}</p>
    </div>

    <div class="col-lg-6">
      <h2 class="display-6 mb-3">Contact us directly at:</h2>
      <ul class="px-0 mb-4">
        <li class="d-flex align-items-center mb-2">
          <i :class="'me-2 pi pi-phone'" style="font-size: 20px;" />
          <a :href="'tel:' + page?.acf?.contact_number">
            {{ page?.acf?.contact_number }}
          </a>
        </li>

        <li class="d-flex align-items-center">
          <i :class="'me-2 pi pi-envelope'" style="font-size: 20px;" />
          <a :href="'mailto:' + page?.acf?.email">
            {{ page?.acf?.email }}
          </a>
        </li>
      </ul>

      <h2 class="display-6 mb-3">Or follow us on social media:</h2>
      <ul class="d-flex px-0">
            <li v-for="social in socials" class="me-2">
                <a class="d-block" :href="social.acf.link" target="_blank">
                    <i :class="icons(social.title.rendered)" style="font-size: 20px;" />
                </a>
            </li>
        </ul>
    </div>
    <Map class="col-lg-6"/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, inject } from 'vue';
import { usePages } from '@/composables/usePages';
import type { Contact } from '@/types/Contact';
import Map from './Map.vue';
import { useCallToActions } from '@/composables/useCallToActions';
import type { Social } from '@/types/Social';
import type { Ref } from 'vue';

const icons = inject('socialsIcon') as (name: string) => string;
const socials = inject('socials') as Ref<Social[]>;
const cta = inject('cta') as ReturnType<typeof useCallToActions>;
const page = reactive({}) as Contact
const usePage = usePages()

onMounted(async () => {
    Object.assign(page, await usePage.api.getPageBySlug('contact'))
    cta.update(page)
})
</script>
