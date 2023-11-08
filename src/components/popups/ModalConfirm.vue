<script setup>
import { VueFinalModal } from 'vue-final-modal';

const { title } = defineProps({
  title: String,
});

const emit = defineEmits(['update:modelValue', 'confirm']);
</script>

<style lang="scss">
.vue-final-modal {
  &-content-class {
    position: absolute;
    inset: 10%;
  }

  &-content {
    position: absolute;
    inset: 10%;
    height: 100%;
    overflow: auto;
  }

  &-modal {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 12px auto;
    padding: 16px;
    background-color: white;

    &.dark {
      background-color: #333;
    }

    &-header {
      font-size: 1.25rem;
    }

    &-button {
      margin-top: 8px;
      margin-left: auto;
      padding: 8px;
      border: 1px solid #000;
      border-radius: 8px;

      &:hover {
        background-color: #eaeaea;
      }
    }
  }
}
</style>

<template>
  <VueFinalModal
      content-transition="vfm-fade"
      overlay-transition="vfm-fade"
      content-class="vue-final-modal-content-class"
      @update:model-value="(val) => emit('update:modelValue', val)"
  >
    <div class="vue-final-modal-content" @click.self="() => emit('update:modelValue', false)">
      <div class="vue-final-modal-modal">
        <h1 class="vue-final-modal-modal-header">
          {{ title }}
        </h1>
        <slot />
        <button class="vue-final-modal-modal-button" @click="() => emit('confirm')">
          Confirm
        </button>
      </div>
    </div>
  </VueFinalModal>
</template>
