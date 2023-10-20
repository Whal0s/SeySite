<script setup>
import { predict } from "../ImageValidator.js";
import handleUpload from "../firebase/FirebaseStorage.js";

let files

// filters out non-image files
async function validateImages(files) {
  let result = []

  for (let file of files) {
    if (file['type'].match("image/*")) {
      //validate image with AI
      let flagged = await predict(file)

      if (flagged.length > 0) {
        let formattedFlags = "";

        if (flagged.length > 1) {
          for (let i = 0; i < flagged.length; ++i) {
            if (i === flagged.length - 1) {
              formattedFlags += " and ";
            } else if (i !== 0) {
              formattedFlags += ", ";
            }

            formattedFlags += flagged[i].toUpperCase();
          }
        } else {
          formattedFlags = flagged[0].toUpperCase();
        }

        alert("Your image has been flagged for " + formattedFlags);
      } else {
        result.push(file);
      }
    }
  }

  console.log(result);

  return result
}

function getFiles(event) {
  validateImages(event.target.files).then(files => {
    for (let file of files) {
      handleUpload(file)
    }
  });
}

defineExpose(files)
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