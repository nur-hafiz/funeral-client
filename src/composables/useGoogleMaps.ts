import { ref } from 'vue';
import type { Ref } from 'vue'
// Define a type for the global window object to include the initMap function
declare global {
    var google: any;
}

const API_KEY = 'AIzaSyBTd0nexVANwfiIRZcLuRW450w4a6lkx2s';
const coordinates = { lat: 1.349591, lng: 103.698654 };

export const useGoogleMaps = (mapElement: Ref<HTMLElement | null>) => {
    const isMapLoaded = ref(false);

    const loadGoogleMapsScript = () => {
        // Check if the Google Maps API script is already loaded
        if (typeof google !== 'undefined' && google.maps) {
            initMap();
            return;
        }

        // Create a script element to load the Google Maps API
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + API_KEY + '&callback=initMap&libraries=maps,marker&v=beta';
        document.head.appendChild(script);
    }

    const initMap = () => {
        loadGoogleMapsScript()

        // Create a map centered on coodinates
        if (mapElement.value) {
            const map = new google.maps.Map(mapElement.value, {
                zoom: 16,
                center: coordinates, 
            });
            isMapLoaded.value = true;
            console.debug('Google Maps initialized.');

            // Add a marker to the coordinates
            const marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                title: 'Jurong Spring CC',
            });

            // Define the content of the InfoWindow
            const infoWindowContent = 
            `<div id="content">
                <div id="siteNotice">
                </div>

                <h2>Jurong Spring CC</h2>
                <p><b>Jurong Spring Community Club</b>, your go-to place for community activities and events.</p>
                <p>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}" target="_blank">Get Directions</a></p>
                </p>
            </div>`;

            // Create an InfoWindow
            const infoWindow = new google.maps.InfoWindow({
                content: infoWindowContent
            });

            // Open the InfoWindow immediately over the marker
            infoWindow.open(map, marker);
        }

    }

    return { isMapLoaded, initMap };
}