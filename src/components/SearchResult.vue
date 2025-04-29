<script>
export default {
  props: {
    text: String,
    type: String,
  },

  emits: ['remove'],
}
</script>

<template>
  <button class="result-pin" @click="$emit('remove', this.text)">
    <img src="../assets/cross.svg" alt="cross to remove search" />
    {{ text }}
  </button>
</template>
