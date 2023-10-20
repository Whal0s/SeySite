<script setup>
  import {ref} from "vue";

  let props = defineProps({
    showCard: {
      type: Boolean,
      default: false
    },
    excluded: {
      type: Array,
      default: []
    }
  })

  let isVisible = ref(props.showCard)

  function toggleCard() {
    isVisible.value = !isVisible.value;
  }

  defineExpose({toggleCard})
</script>

<template>
  <div v-show="isVisible" id="popup">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
  #popup {
    position: fixed;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 7%;
    z-index: 99;
  }
</style>

