<script setup>

</script>

<template>
  <button>
    <slot>Default Button Text</slot>
  </button>
</template>

<style scoped>

  button {
    font-family: "Pixelify Sans", sans-serif;
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
