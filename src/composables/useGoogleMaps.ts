import { ref } from 'vue';
import type { Ref } from 'vue';

declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}

const API_KEY = 'AIzaSyBTd0nexVANwfiIRZcLuRW450w4a6lkx2s';
const coordinates = { lat: 1.349591, lng: 103.698654 };

export const useGoogleMaps = (mapElement: Ref<HTMLElement | null>) => {
  const isMapLoaded = ref(false);

  // Define the promise outside of the loadGoogleMapsScript function
  // to ensure it's only created once.
  let mapLoadPromise: Promise<void> | null = null;

  const loadGoogleMapsScript = () => {
    if (window.google && window.google.maps) {
      // If the Google Maps API is already loaded, resolve immediately.
      if (!isMapLoaded.value) {
        window.initMap();
      }
      return Promise.resolve();
    }

    if (!mapLoadPromise) {
      // Create the promise if it doesn't exist yet.
      mapLoadPromise = new Promise<void>((resolve) => {
        // Assign initMap to window to ensure it's called after the script loads.
        window.initMap = () => {
          if (mapElement.value) {
            const map = new window.google.maps.Map(mapElement.value, {
              zoom: 16,
              center: coordinates,
            });
            isMapLoaded.value = true;
            console.debug('Google Maps initialized.');

            const marker = new window.google.maps.Marker({
              position: coordinates,
              map: map,
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

            infoWindow.open(map, marker);

            resolve(); // Resolve the promise once the map is initialized
          }
        };
      });

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    return mapLoadPromise;
  };

  return { isMapLoaded, loadGoogleMapsScript };
};