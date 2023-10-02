<script setup>
  import Image from "./Image.vue";

  defineProps(['images']);
</script>

<template>
  <div id="wrapper" v-for="image in images">
    <Image :image="image"/>
  </div>
</template>

<style scoped lang="scss">
    #wrapper {
        rotate: 90deg;
      * {
        transform: rotate(-90deg);
      }
    }
</style>
