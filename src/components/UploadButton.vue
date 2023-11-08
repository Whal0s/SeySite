<script setup>
import handleUpload from "../firebase/FirebaseStorage.js";
import {auth, provider} from "../firebase/init.js";
import {getRedirectResult, signInWithRedirect} from "firebase/auth"

// filters out non-image files
async function validateImages(files) {
  let result = []

  for (let file of files) {
    if (file['type'].match("image/*")) {
        result.push(file);
    }
  }

  console.log(result);

  return result
}



function getFiles(event) {
  console.log("button has been pressed")
  // signInWithRedirect(auth, provider);
  // getRedirectResult(auth).then((result) => {
  //         console.log("User has authenticated")
  validateImages(event.target.files).then(files => {
    //TODO unsure if this works
    window.onbeforeunload = "You have attempted to leave the page while images are still uploading. This will cancel the upload. Are you sure?";
    for (let file of files) {
      handleUpload(file)
    }
    window.onbeforeunload = null
  });
  //
  // }).catch((error) => {
  //
  // });

}
</script>

<template>
  <!--  invisible helper input -->
  <input type="file" ref="file" accept="image/*" style="display: none" @change="getFiles"/>

  <button class="btn" @click="$refs.file.click()">
    <slot>Default Button Text</slot>
  </button>
</template>

<style lang="scss" scoped>
$primary-color: #47b2e8;
$primary-secondary-color: #3a7fd9;

@mixin button-color($color, $secondary-color) {
  background-image: linear-gradient(45deg, $color 0%, $secondary-color 51%, $color 100%);
  box-shadow: 0 0 14px -7px $secondary-color;

  &:hover {
    background-position: right center;
    text-decoration: none;
  }
}

.btn {
  padding: 3vh 8vw;
  text-align: center;
  text-transform: uppercase;
  transition: background-position 0.5s, 0.15s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: none;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-family: 'Pixelify Sans', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 2vw;
  outline: 0;

  @include button-color($primary-color, $primary-secondary-color);

  &:active {
    transform: scale(0.95);
  }
}
</style>