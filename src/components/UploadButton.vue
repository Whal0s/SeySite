<script setup>
// filters out non-image files
function validateImages(files) {
  let result = []

  for (let file of files) {
    if (file['type'].match("image/*") && is(file)) {
      //validate image with AI
      result.push(file)
    }
  }

  return result
}


</script>

<template>
  <button class="btn" @click="buttonClicked">
    <slot>Default Button Text</slot>
  </button>
</template>

<style scoped>

  button {
    font-family: "Pixelify Sans";
    height: 40%;
    width: 58%;
    background-color: #535bf2;
    font-size: 3vh;
    border-radius: 10px;
  }

  button:hover{
    border: 5px solid white;
    transition: 2s;
    cursor: pointer;
  }
</style>