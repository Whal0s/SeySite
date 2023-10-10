<script setup>
  import CustomButton from "./UploadButton.vue";
</script>

<template>
  <div id="spacer"/>
  <div id="base">
    <div class="UploadSection">
      <custom-button>Upload Image</custom-button>
    </div>
    <div class="Titles">
      <img src="/seycove.png" alt="seycove logo">
      <div>
        <h1>Seycove Photo Archive</h1>
        <h2>By: Jordan Lo & Thomas "Bobby" Harrison</h2>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  #spacer {
    margin: 22vh;
    width: 100%;
  }

  #base {
    background: linear-gradient(130deg, rgb(44, 54, 141) 0%, rgb(136, 165, 204) 100%);
    position: fixed;
    top: 0;
    left: 0;
    height: 20vh;
    width: 100%;
    font-family: "Pixelify Sans", sans-serif;
    display: inline-flex;

    .UploadSection {
      flex-grow: 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .Titles {
      img {
        height: 100%;
        object-fit: scale-down;
        margin-right: 5%;
      }

      flex-grow: 4;
      display: inline-flex;
      justify-content: center;
      font-size: 1.8vh;
    }
  }
</style>
