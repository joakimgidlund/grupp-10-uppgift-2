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
  <button class="summary-button">
    <RouterLink class="link" to="/dishinfo">
  <div class="summary">
    <div class="title">{{ title }}</div>
    <div v-if="theme" class="info"> <img src="../assets/check.svg" alt="check icon">{{ theme }}</div>
    <div v-if="disallowed" class="info"><img src="../assets/info.svg" alt="info icon"> {{ disallowed }}</div>
    <div v-if="adjust" class="info"><img src="../assets/round_arrows.svg" alt="adjust icon"> {{ adjust }}</div>
    <div v-if="price" class="info"><img src="../assets/receive_payment.svg" alt="price icon"> {{ price }} kr/portion <img src="../assets/pay.svg" alt="cost icon">{{ cost }} kr/portion</div>
    <img class="arrow" src="../assets/result_arrow.svg" alt="arrow">
  </div>
</RouterLink>
</button>
</template>


<style scoped>
.summary-button {
  all: unset;
  width: 100%;
}

.summary-button:hover {
  cursor: pointer;
}

.summary-button:active .arrow {
  /* filter: drop-shadow(0px 2px 3px #000); */
  filter: blur(2px);
}

.summary-button:hover .arrow {
  scale: 1.2;
}

.summary {
  display: grid;
  grid-template-columns: 80% 1fr;
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

  display: flex;
  gap: 5px;
}

.arrow {
  grid-column: 2;
  grid-row-start: 1;
  grid-row-end: 100;

  justify-self: right;
  align-self: center;
}
</style>
