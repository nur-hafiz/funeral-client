import { ref, onUnmounted } from 'vue';
import type { Ref } from 'vue';
declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}

const API_KEY = 'AIzaSyBTd0nexVANwfiIRZcLuRW450w4a6lkx2s'; // Use your actual API key
const coordinates = { lat: 1.349591, lng: 103.698654 };

export const useGoogleMaps = (mapElement: Ref<HTMLElement | null>) => {
  const isMapLoaded = ref(false);
  let mapLoadPromise: Promise<void> | null = null;
  //@ts-expect-error
  let mapInstance = ref<google.maps.Map | null>(null);

  const loadGoogleMapsScript = () => {
    if (window.google && window.google.maps) {
      if (!isMapLoaded.value && mapElement.value) {
        if (!mapInstance.value) {
          // Initialize the map if it hasn't been created yet
          mapInstance.value = new window.google.maps.Map(mapElement.value, {
            zoom: 16,
            center: coordinates,
          });
          isMapLoaded.value = true;
          console.debug('Google Maps initialized.');

          // Marker and InfoWindow setup
          const marker = new window.google.maps.Marker({
            position: coordinates,
            map: mapInstance.value,
            title: 'Jurong Spring CC',
          });

          const infoWindowContent = `
            <div id="content">
              <h2>Jurong Spring CC</h2>
              <p><b>Jurong Spring Community Club</b>, your go-to place for community activities and events.</p>
              <p><a href="https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}" target="_blank">Get Directions</a></p>
            </div>`;

          const infoWindow = new window.google.maps.InfoWindow({
            content: infoWindowContent,
          });

          infoWindow.open(mapInstance.value, marker);
        } else {
          // If the map instance exists, simply reattach it to the new mapElement
          mapInstance.value.setCenter(coordinates); // Re-center the map
        }
        return Promise.resolve();
      }
    }

    if (!mapLoadPromise) {
      mapLoadPromise = new Promise<void>((resolve) => {
        window.initMap = () => {
          if (mapElement.value && !mapInstance.value) {
            mapInstance.value = new window.google.maps.Map(mapElement.value, {
              zoom: 16,
              center: coordinates,
            });
            isMapLoaded.value = true;
            console.debug('Google Maps initialized.');

            // Marker and InfoWindow setup
            const marker = new window.google.maps.Marker({
              position: coordinates,
              map: mapInstance.value,
              title: 'Jurong Spring CC',
            });

            const infoWindowContent = `
              <div id="content">
                <h2>Jurong Spring CC</h2>
                <p><b>Jurong Spring Community Club</b>, your go-to place for community activities and events.</p>
                <p><a href="https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}" target="_blank">Get Directions</a></p>
              </div>`;

            const infoWindow = new window.google.maps.InfoWindow({
              content: infoWindowContent,
            });

            infoWindow.open(mapInstance.value, marker);

            resolve();
          }
        };

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      });
    }

    return mapLoadPromise;
  };

  // Ensure the initMap function is globally accessible for the Google Maps callback
  window.initMap = () => mapLoadPromise?.then(() => {});

  onUnmounted(() => {
    // No need to reset mapLoadPromise or mapInstance here since we want to reuse the map
  });

  return { isMapLoaded, loadGoogleMapsScript };
};