<script setup>
import SearchComponent from './components/SearchComponent.vue'
import IngredientService from './components/IngredientService.vue'
</script>

<script>
export default {
  data() {
    return {
      themes: null,
      ingredients: null,
    }
  },

  created() {
    this.themes = IngredientService.getThemes()
    this.ingredients = IngredientService.getIngredients()
  },
}
</script>

<template>
  <div class="top">
    <img src="./assets/search.svg" alt="search icon" />
    <input class="top-search" type="search" placeholder="Sök på en rätt" />
    <button class="save-button">
      <img src="./assets/like_default.svg" alt="like button heart" />
      Sparade listor
    </button>
  </div>

  <div class="course-box">
    <div class="radio-box">
      <input class="course-radio" type="radio" name="course-selector" id="pre" />
      <label for="pre">Förrätt</label>
    </div>

    <div class="radio-box">
      <input class="course-radio" type="radio" name="course-selector" id="main" />
      <label for="main">Varmrätt</label>
    </div>

    <div class="radio-box">
      <input class="course-radio" type="radio" name="course-selector" id="dessert" />
      <label for="dessert">Efterrätt</label>
    </div>

    <div class="radio-box">
      <input class="course-radio" type="radio" name="course-selector" id="extras" />
      <label for="extras">Tillbehör/tilltugg</label>
    </div>
  </div>

  <div class="price-title">
    <img src="./assets/receive_payment.svg" alt="money icon" />
    <span class="price-title">Maxpris per portion</span>
  </div>
  <div class="price-input">
    <div>0 kr</div>
    <input type="range" name="max-price" min="0" max="1000" />
    <div>1000 kr</div>
  </div>

  <SearchComponent box-title="Tema" type="theme" :searches="this.themes"></SearchComponent>
  <SearchComponent
    box-title="Ingredienser"
    type="ingredients"
    :searches="this.ingredients"
  ></SearchComponent>
  <SearchComponent
    box-title="Får ej förekomma"
    type="disallowed"
    image="../assets/info.svg"
    :searches="this.ingredients"
  ></SearchComponent>
  <SearchComponent
    box-title="Anpassningar"
    type="adjust"
    image="../assets/round_arrows.svg"
    :searches="this.ingredients"
  ></SearchComponent>
</template>

<!-- <style scoped></style> -->
