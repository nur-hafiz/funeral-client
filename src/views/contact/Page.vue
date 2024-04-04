<template>
  <div ref="mapElement" style="height: 400px;"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useGoogleMaps } from '@/composables/useGoogleMaps';

// Create a ref for the map element
const mapElement = ref<HTMLElement | null>(null);

// Initialize the composable with the map element ref
const { loadGoogleMapsScript } = useGoogleMaps(mapElement);

// Ensure the Google Maps script is loaded and the map is initialized
// once the component is mounted and the DOM is ready
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