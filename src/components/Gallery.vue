<script setup>
  import GalleryColumn from "./GalleryColumn.vue";
  const props = defineProps(['images']);

  const numColumns = props.images.length
</script>

<template>
  <div id="base">
    <div class="frame">
      <div class="column" v-for="imageArr in props.images">
        <GalleryColumn :images="imageArr"/>
      </div>
    </div>
  </div>
</template>


<style scoped>
  #base {
    //background-color: #535bf2;
    width: 90%;
    margin: 5%;
    border-radius: 1vmin;
    .frame {
      display: grid;
      grid-gap: 1vw;
      grid-template-columns: repeat(v-bind(numColumns), 1fr);
    }
  }
</style>
