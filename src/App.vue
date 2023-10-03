<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Gallery from "./components/Gallery.vue";
</script>

<template>
  <NavBar/>
  <Gallery :images='[
      ["/seycove.png", "/seycove.png", "/seycove.png", "/seycove.png", "/seycove.png"],
      ["/seycove.png", "/seycove.png", "/seycove.png", "/seycove.png"],
      ["/seycove.png", "/seycove.png", "/seycove.png"],
    ]'/>
</template>

<style scoped>
</style>
