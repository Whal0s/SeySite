<script setup>
  import NavBar from "./components/NavBar.vue";
  import Gallery from "./components/Gallery.vue";
  import {ModalsContainer, useModal} from "vue-final-modal";
  import ModalConfirm from "./components/popups/ModalConfirm.vue";

  const MissionStatementPopup = useModal({
    component: ModalConfirm,
    attrs: {
      title: 'Mission Statement',
      onConfirm() {
        MissionStatementPopup.close()
      },
    },
    slots: {
      default: '<p>\n' +
          '    The Seycove Photo Archive has a mission to capture, preserve, and share the visual history of our educational community,\n' +
          '    fostering a deeper connection to our past and inspiring a brighter future.\n' +
          '    We believe that photographs hold the power to evoke memories, tell stories, and spark meaningful conversations.\n' +
          '    Through our commitment to collecting, archiving, and curating images that document the journey of our school,\n' +
          '    we aim to enrich the educational experience, instill a sense of pride in our shared heritage, and provide invaluable resources for teaching and learning.\n' +
          '  </p>',
    },
  })

  const AboutPopup = useModal({
    component: ModalConfirm,
    attrs: {
      title: 'About',
      onConfirm() {
        AboutPopup.close()
      },
    },
    slots: {
      default: '<p>About popup text</p>',
    },
  })
</script>

<template>
  <ModalsContainer />
  <NavBar @title-clicked="MissionStatementPopup.open()" @subtitle-clicked="AboutPopup.open()"/>

  <!-- TODO: make this use images from the database -->
  <Gallery :images='[
      ["/zvcrmwa39fbb1.jpg", "/3iw31anihkpb1.jpg", "/9h3nejo5hapb1.jpg", "/14ow7hon2hgb1.jpg", "/9yjfe0owwbib1.jpg"],
      ["/ac26nyo7q2cb1.jpg", "/dcffduxmvsbb1.jpg", "/fdyue1n8kt0b1.jpg", "/isngv3p5b8qb1.jpg", "/p8xpuk4ptaeb1.jpg"],
      ["/wavctgn8l5kb1.jpg", "/wz9onkvr6zcb1.jpg", "/y0iwd3jjhgl81.jpg", "/yjcir9jylyab1.jpg", "/zczifwq7w0pb1.jpg"],
    ]' />
</template>

<style scoped>
</style>
