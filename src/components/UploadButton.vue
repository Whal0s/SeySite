<script setup>
import database from "../firebase/init.js";
import { collection, addDoc } from 'firebase/firestore'

function buttonClicked() {
  const collectionRef = collection(database, 'images')

  const dataObject = {
    val1: "bye",
    val2: "bobby"
  }

  const docRef = addDoc(collectionRef, dataObject)

  console.log(docRef)


}
 defineEmits(['buttonClicked'])


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