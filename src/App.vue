<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import GalleryColumn from "./components/GalleryColumn.vue";
</script>

<template>
  <NavBar/>
  <GalleryColumn :images='["/seycove.png", "/seycove.png", "/seycove.png", "/seycove.png", "/seycove.png"]'/>
</template>

<style scoped>
</style>
