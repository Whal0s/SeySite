<script setup>
  import Image from "./Image.vue";

  defineProps(['images']);
</script>

<template>
    <div class="wrapper" v-for="image in images">
        <Image :image="image"/>
    </div>
</template>

<style scoped lang="scss">

</style>
