<script setup>
  defineProps({
    'image': String,
    'class': String,
    'text': String,
  });
  defineEmits(['focus']);

  function focus() {
    // make the image fill most of the screen with an x in the top right corner
    // potentially use
  }
</script>

<template>
  <div class="image-wrapper">
    <img :src="image"/>
    <p>{{text}}</p>
  </div>
</template>

<style scoped lang="scss">
  .image-wrapper {
    background-color: #333aaa;
    border-radius: 1vmin;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: inherit;
    }

    p {
      text-align: center;
      text-overflow: ellipsis;
    }
  }
</style>
