<script setup>
  import CustomButton from "./UploadButton.vue";

  defineEmits(['TitleClicked', 'SubtitleClicked'])
</script>

<template>
  <div id="spacer"/>
  <nav>
    <div class="upload-section">
      <custom-button>Upload Image</custom-button>
    </div>
    <div class="titles">
      <img src="/seycove.png" alt="seycove logo">
      <div>
        <h1 @click="$emit('TitleClicked')">Seycove Photo Archive</h1>
        <h2 @click="$emit('SubtitleClicked')">By: Jordan Lo & Thomas "Bobby" Harrison</h2>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  #spacer {
    margin: 22vh;
    width: 100%;
  }

  nav {
    background: linear-gradient(130deg, rgb(44, 54, 141) 0%, rgb(136, 165, 204) 100%);
    position: fixed;
    top: 0;
    left: 0;
    height: 20vh;
    width: 100%;
    font-family: "Pixelify Sans", sans-serif;
    display: inline-flex;
    color: white;

    .upload-section {
      margin-left: 5vw;
      margin-right: 0;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .titles {
      img {
        height: 100%;
        object-fit: scale-down;
        margin-right: 5%;
      }

      h1, h2 {
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;

        background: linear-gradient(to right, rgba(0, 72, 255, 0.23) 50%, rgba(0, 0, 0, 0) 50%) right;
        background-size: 200% 100%;
        transition: .5s ease-in-out;
      }

      h1 {
        padding-bottom: 3%;
        margin-bottom: 0;
        margin-top: 3%;
        padding-right: 0;
        font-size: 375%;
      }

      h1:hover, h2:hover {
        background-position: left;
      }


      h2 {
        margin-top: 0;
      }

      flex-grow: 4;
      display: inline-flex;
      justify-content: center;
      font-size: 1.8vh;
    }
  }

  @media(max-width: 1200px) {nav {
    background: linear-gradient(130deg, rgb(44, 54, 141) 0%, rgb(136, 165, 204) 100%);
    position: fixed;
    top: 0;
    left: 0;
    height: 20vh;
    width: 100%;
    font-family: "Pixelify Sans", sans-serif;
    display: inline-flex;
    color: white;

    .upload-section {
      margin-left: 5vw;
      margin-right: 2vw;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .titles {

      padding-left: 5px;

      img {
        display: none;
      }

      h1, h2 {
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;

        background: linear-gradient(to right, rgba(0, 72, 255, 0.23) 50%, rgba(0, 0, 0, 0) 50%) right;
        background-size: 200% 100%;
        transition: .5s ease-in-out;
      }

      h1 {
        padding-bottom: 3%;
        margin-bottom: 0;
        margin-top: 3%;
        padding-right: 0;
        font-size: 25px;
      }

      h1:hover, h2:hover {
        background-position: left;
      }


      h2 {
        margin-top: 0;
        font-size: 20px
      }

      flex-grow: 4;
      display: inline-flex;
      justify-content: center;
      font-size: 1.8vh;
    }
  }
  }
</style>
