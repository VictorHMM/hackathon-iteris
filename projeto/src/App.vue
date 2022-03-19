<template>
  <v-app>
    <AppTopBar />
    <v-main>
      <LocalCarnival />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from "./components/shared/AppTopBar.vue";
import LocalCarnival from "./views/LocalCarnival.vue";
export default {
  name: "App",
  components: {
    AppTopBar,
    LocalCarnival,
  },
};
</script>

<style lang="scss">
</style>
