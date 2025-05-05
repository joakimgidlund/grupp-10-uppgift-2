<script setup>
import CustomerListComponent from './CustomerListComponent.vue';

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
  },

  methods: {
    windowToggle() {
      let state = document.getElementById("list-window").style.display
      if(state === "none" || state === "") {
        document.getElementById("list-window").style.display = "block"
      }
      else {
        document.getElementById("list-window").style.display = "none"
      }
    }
  }
}
</script>

<template>
  <div class="summary">
    <div class="title">
      {{ title }}
      <button class="like-button" @click="windowToggle"><img src="../assets/like_default.svg" alt="like button"></button>
    </div>
    <div v-if="theme" class="info"> <img src="../assets/check.svg" alt="check icon">{{ theme }}</div>
    <div v-if="disallowed" class="info"><img src="../assets/info.svg" alt="info icon"> {{ disallowed }}</div>
    <div v-if="adjust" class="info"><img src="../assets/round_arrows.svg" alt="adjust icon"> {{ adjust }}</div>
    <div v-if="price" class="info"><img src="../assets/receive_payment.svg" alt="price icon"> {{ price }} kr/portion
      <img src="../assets/pay.svg" alt="cost icon">{{ cost }} kr/portion
    </div>
    <button class="summary-button">
      <RouterLink class="link" to="/dishinfo">
        <img class="arrow" src="../assets/result_arrow.svg" alt="arrow">
      </RouterLink>
    </button>
    <CustomerListComponent @closeWindow="windowToggle" id="list-window"></CustomerListComponent>
  </div>



</template>


<style scoped>
.summary-button {
  all: unset;
  width: 100%;

  grid-column: 2;
  grid-row-start: 1;
  grid-row-end: 100;

  justify-items:end;
}

.summary-button:hover {
  cursor: pointer;
}

.summary-button:active .arrow {
  filter: blur(2px);
}

.summary-button:hover .arrow {
  scale: 1.2;
}

.like-button {
  all: unset;
  display: flex;
  align-items: center;
}

.like-button:hover {
  scale: 1.1;
}

.like-button:active {
  scale: 0.8;
}

.summary {
  display: grid;
  grid-template-columns: 1fr 25px;
  grid-auto-rows: auto;

  border-top: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;

  width: 100%;

  position: relative;
}

.title {
  display: flex;
  align-items: center;
  gap: 10px;
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
</style>
