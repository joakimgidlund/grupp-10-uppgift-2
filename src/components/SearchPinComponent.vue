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
  <button class="result-pin" @click="$emit('remove', text)">
    <img src="../assets/cross.svg" alt="cross to remove search" />
    {{ text }}
  </button>
</template>

<style scoped>
.result-pin {
  display: flex;
  align-items: center;
  background: none;
  border: 1px solid black;
  padding: 5px 8px;
  border-radius: 15px;
  height: 30px;
}

.result-pin:hover {
  scale: 1.1;
  cursor: pointer;
}

img {
  /* width: 8px;
  height: 8px; */
  margin-left: -5px;
  margin-right: -2px;
}

.ingredients {
  border-color: #93db9d;
}

.disallowed {
  border-color: #cd6161;
}

.adjust {
  border-color: #ffaf53;
}
</style>
