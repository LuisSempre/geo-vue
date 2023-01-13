<template>
  <div class="h-screen relative">
    <div class="h-full z-[1]"></div>
  </div>
</template>

<script>
import leaflet from "leaflet";
import { onMounted } from "vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    let map;
    onMounted(() => {
      // init map
      map = leaflet.map("map").setView([28.538336, -81.379234], 10);

      // add tile layer
      L.tileLayer(
        `https://tile.openstreetmap.org/{z}/{x}/{y}?acces_token=${process.env.VUE_APP_APIKEY}`,
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
      ).addTo(map);
    });
  },
};
</script>
