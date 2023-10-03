<script setup>
  import GalleryColumn from "./GalleryColumn.vue";
  import {onMounted} from "vue";
  defineProps(['images']);
  
  onMounted(() => {
  
  })
</script>

<template>
  <div id="base">
    <div class="frame">
        <div class="column" v-for="imageArr in images">
            <GalleryColumn :images="imageArr"/>
        </div>
    </div>
  </div>
</template>


<style scoped>
  #base {
    background-color: #535bf2;
    width: 90%;
    margin: 5%;
    .frame {
      display: grid;
    }
  }
</style>
