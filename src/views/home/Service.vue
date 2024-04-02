<template>
    <Card v-if="service.title">
        <template #title>{{ service.title.rendered }} - SGD {{ service.acf.price }}</template>
        <template #content>
            <p class="m-0">
                {{ service.acf.description }}
            </p>

            <template v-if="service.acf.requires">
                Only available with these services:
                <ul class>
                    <li v-for="requiredService in service.acf.requires">
                        {{ requiredService.post_title }}
                    </li>
                </ul>
            </template>
        </template>
    </Card>
</template>

<script setup lang="ts">
import type { Service } from '@/types/Services';

defineProps<{
    service: Service;
}>();
</script>