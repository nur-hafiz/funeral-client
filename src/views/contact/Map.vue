<template>
  <div ref="mapElement" style="height: 400px;"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useGoogleMaps } from '@/composables/useGoogleMaps'; 

const mapElement = ref<HTMLElement | null>(null);
const { loadGoogleMapsScript } = useGoogleMaps(mapElement);

onMounted(async () => {
  await loadGoogleMapsScript();
});
</script>

<style>
/* Define the size of the div element that contains the map. */
div[ref="mapElement"] {
  height: 400px; /* Adjust the height as needed */
}

/* Optional: Makes the sample page fill the window. */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>