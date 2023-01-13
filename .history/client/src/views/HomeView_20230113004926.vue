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
      // init
      map = leaflet.map("map").setView([28.538336, -81.379234], 10);
    });
  },
};
</script>
