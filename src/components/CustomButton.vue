<script setup>
  import database from "../firebase/init.js";
  import { collection, addDoc } from 'firebase/firestore'

  function buttonClicked() {
    const collectionRef = collection(database, 'images')

    const dataObject = {
      val1: "hi",
      val2: "bobby"
    }

    const docRef = addDoc(collectionRef, dataObject).then(res => console.log(res.id))
  }

  defineEmits(['buttonClicked']);
</script>

<template>
  <button class="btn" @click="buttonClicked()">
    <slot>Default Button Text</slot>
  </button>
</template>

<style lang="scss" scoped>
@mixin button-color($color, $secondary-color) {
  background-image: linear-gradient(45deg, $color 0%, $secondary-color 51%, $color 100%);
  box-shadow: 0 0 14px -7px $secondary-color;

  &:hover {
    background-position: right center; // change the direction of the change here
    text-decoration: none;
  }
}

.btn {
  margin: 10px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  outline: 0;

  @include button-color(#22a7f0, #0d7cb9);
}
</style>
