<template>
    <h1>Welcome to Funeral Service</h1>
    {{ services }}
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useServices } from '@/composables/useServices'

const { api } = useServices()

const services = ref([])

onMounted(async () => {
    services.value = await api.getAll()
})
</script>