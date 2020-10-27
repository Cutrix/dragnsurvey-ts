<template>
  <v-app>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./views/Home.vue";

export default Vue.extend({
  name: "App",

  components: {
    Home
  },

  data: () => ({
    //
  })
});
</script>
