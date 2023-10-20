<script setup>
  import Image from "./Image.vue";

  defineProps(['images']);

  function getTextElseEmpty(image) {
    if (Array.isArray(image) && image.length > 1) {
      return image[1]
    }

    return ""
  }

  function getImage(image) {
    if (Array.isArray(image)) {
      return image[0]
    }

    return image
  }
</script>

<template>
    <div class="column" v-for="image in images">
      <Image class="image" :image="getImage(image)" :text="getTextElseEmpty(image)"/>
    </div>
</template>

<style scoped lang="scss">
  .column {
    line-height: 0; // fix weird overflowing background
  }
</style>
