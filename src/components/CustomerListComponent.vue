<script setup>
</script>

<script>
export default {
  emits: ["closeWindow"]
}
</script>

<template>
  <div class="window">
    <div class="header">
      <button class="close-button" @click="$emit('closeWindow')">
        <img src="../assets/small_cross.svg" alt="close window button">
      </button>
    </div>
    <input type="text" placeholder="Sök på en minneslista" />
    <div class="hori-line"></div>
    <ul>
      <li>Karin & Niklas bröllop</li>
      <div class="hori-line"></div>
      <li>Kajsas 60-årsfest</li>
      <div class="hori-line"></div>
      <li>Ola & Conny grillfest</li>
    </ul>
    <div class="hori-line-purple"></div>
    <div class="footer">
      <img src="../assets/plus_button.svg" alt="add button">
      <span>Skapa minneslista</span>
    </div>
  </div>
</template>

<style scoped>
.window {
  width: 250px;
  height: fit-content;

  border-radius: 10px;
  display: none;
  position: absolute;
  z-index: 10;
  top: 100px;
  left: 10rem;

  background-color: #fff;
  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
}

.header {
  background-color: #7C75AB;
  height: 22px;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

input {
  width: 240px;
  margin: 5px;
  padding: 0 10px 0 20px;

  border-radius: 8px;
  border: 1px solid #7C75AB;

  background-image: url("../assets/search.svg");
  background-repeat: no-repeat;
  background-size: 18px;
  background-position: 3px;
}

.close-button {
  background: none;
  border: none;
  position: relative;
  top: 2px;
}

.close-button:hover {
  cursor: pointer;
}

.close-button:active {
  scale: 0.9;
}

ul {
  list-style-position: inside;
  padding: 10px;
}

li {
  margin: 10px 0px 10px 0px;
}

.hori-line {
  height: 1px;
  width: 220px;
  justify-self: center;
  background-color: #D9D9D9;
}

.hori-line-purple {
  height: 1px;
  width: 100%;
  justify-self: center;
  background-color: #7C75AB;
}

.footer {
  display: flex;
  align-items: center;
  gap: 13px;
  margin: 4px 7px 5px 7px;
}
</style>
