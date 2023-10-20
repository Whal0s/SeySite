<script setup>
  import NavBar from "./components/NavBar.vue";
  import Gallery from "./components/Gallery.vue";
  import {ref} from "vue";
  import {Modal} from 'usemodal-vue3';
  import MissionStatementPopup from "./components/popups/MissionStatementPopup.vue";

  //auth
  import { signInWithPopup } from "firebase/auth";

  // signInWithPopup()

  const isVisible = ref(false);
</script>

<template>
  <Modal v-model:visible="isVisible">
    <MissionStatementPopup/>
  </Modal>
  <NavBar @title-clicked="isVisible.value = !isVisible.value"/>

  <!-- TODO: make this use images from the database -->
  <Gallery :images='[
      ["/zvcrmwa39fbb1.jpg", "/3iw31anihkpb1.jpg", "/9h3nejo5hapb1.jpg", "/14ow7hon2hgb1.jpg", "/9yjfe0owwbib1.jpg"],
      ["/ac26nyo7q2cb1.jpg", "/dcffduxmvsbb1.jpg", "/fdyue1n8kt0b1.jpg", "/isngv3p5b8qb1.jpg", "/p8xpuk4ptaeb1.jpg"],
      ["/wavctgn8l5kb1.jpg", "/wz9onkvr6zcb1.jpg", "/y0iwd3jjhgl81.jpg", "/yjcir9jylyab1.jpg", "/zczifwq7w0pb1.jpg"],
    ]' />
</template>

<style scoped>
</style>
