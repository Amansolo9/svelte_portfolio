<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import 'leaflet/dist/leaflet.css';
  let mapElement: HTMLDivElement;
  let map: any;
  let tileLayer: any;
  let observer: MutationObserver | undefined;

  const darkTiles = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'; // light map for dark mode
  const lightTiles = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'; // dark map for light mode
  const attribution = '&copy; <a href="https://carto.com/attributions">CARTO</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  function getTileUrl() {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? darkTiles : lightTiles;
    }
    return lightTiles; // default to light tiles for SSR
  }

  function updateTileLayer() {
    if (tileLayer && map) {
      tileLayer.setUrl(getTileUrl());
    }
  }

  function onThemeChange() {
    updateTileLayer();
  }

  onMount(async () => {
    const L = await import('leaflet');
    map = L.map(mapElement).setView([9.035, 38.75], 13);

    tileLayer = L.tileLayer(getTileUrl(), {
      attribution
    }).addTo(map);

    const brandIcon = L.icon({
      iconUrl: '/assets/map.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
      className: 'brand-marker-icon'
    });

    L.marker([9.035, 38.752], { icon: brandIcon }).addTo(map);

    observer = new MutationObserver(onThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  });

  onDestroy(() => {
    if (map) map.remove();
    if (observer) observer.disconnect();
  });
</script>

<div bind:this={mapElement} class="map-container"></div>

<style>
.map-container {
  width: 100%;
  max-width: 520px;
  height: 320px;
  min-height: 220px;
  margin: 2rem auto 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.08);
  background: #fff;
}
@media (max-width: 600px) {
  .map-container {
    height: 220px;
    min-height: 180px;
    max-width: 100vw;
    border-radius: 10px;
  }
}
</style> 