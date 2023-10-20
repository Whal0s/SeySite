<script setup>

</script>

<template>
  <div class="card">
    <h1> Mission Statement </h1>
    <p>
      The Seycove Photo Archive has a mission to capture, preserve, and share the visual history of our educational community,
      fostering a deeper connection to our past and inspiring a brighter future.
      We believe that photographs hold the power to evoke memories, tell stories, and spark meaningful conversations.
      Through our commitment to collecting, archiving, and curating images that document the journey of our school,
      we aim to enrich the educational experience, instill a sense of pride in our shared heritage, and provide invaluable resources for teaching and learning.
    </p>
  </div>
  <button @click="toggleCard">&times;</button>
</template>

<style scoped lang="scss">
  .card {
    position: fixed;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 7%;
    background-color: #485c75;
  }
</style>