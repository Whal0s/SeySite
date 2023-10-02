<script setup>
  defineProps(['image']);
  defineEmits(['makeBigger']);
  
  function makeBigger() {
      // make the image fill most of the screen with an x in the top right corner
  }
</script>

<template>
    <img :src="image"/>
</template>

<style scoped>
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>
