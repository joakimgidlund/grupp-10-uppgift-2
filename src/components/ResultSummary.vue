<script setup>
</script>

<script>
export default {
  props: {
    title: String,
    theme: String,
    disallowed: String,
    adjust: String,
    price: String,
    cost: String,
  }
}
</script>

<template>
  <div class="summary">
    <div class="title">{{ title }}</div>
    <div v-if="theme" class="info"> {{ theme }}</div>
    <div v-if="disallowed" class="info"> {{ disallowed }}</div>
    <div v-if="adjust" class="info"> {{ adjust }}</div>
    <div v-if="price" class="info"> {{ price }} kr/portion {{ cost }} kr/portion</div>
    <div class="arrow"><img src="../assets/result_arrow.svg" alt="arrow"> </div>
  </div>

</template>


<style scoped>
.summary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: repeat(1fr); */
  grid-auto-rows: auto;

  /* margin: 5px 0px 5px 0px; */

  border-top: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;

  width: 100%;
}

.title {
  font-size: 16px;
  font-weight: 600;
  grid-column: 1;

  margin: 5px 0px;
}

.info {
  grid-column: 1;
  margin: 5px 0px;
}

.arrow {
  grid-column: 2;
  grid-row-start: 1;
  grid-row-end: 100;

  justify-self: right;
  align-self: center;
}
</style>
