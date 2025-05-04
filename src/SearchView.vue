<script setup>
import SearchBoxComponent from './components/SearchBoxComponent.vue'
import IngredientService from './components/IngredientService.vue'
import VueSlider from "vue-3-slider-component"
</script>

<script>
export default {
  data() {
    return {
      themes: null,
      ingredients: null,
      sliderValue: 0,
      combinedSearches: []
    }
  },

  emits: ["update"],

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
    <div class="slider-range">0 kr</div>
    <VueSlider width="80%" :height="5" v-model="sliderValue" :min="0" :max="1000" tooltipPlacement="bottom"
      :contained="true" :railStyle="{ backgroundColor: '#7C75AB' }" :processStyle="{ backgroundColor: '#101010' }"
      :dotStyle="{ backgroundColor: '#101010' }">
      <template #tooltip="{ value }">
        <div>{{ value }}</div>
      </template>
    </VueSlider>
    <div class="slider-range">1000 kr</div>
  </div>

  <SearchBoxComponent box-title="Tema" type="theme" :searches="themes"></SearchBoxComponent>
  <SearchBoxComponent box-title="Ingredienser" type="ingredients" :searches="ingredients">
  </SearchBoxComponent>
  <SearchBoxComponent box-title="Får ej förekomma" type="disallowed" image="../assets/info.svg"
    :searches="ingredients">
  </SearchBoxComponent>
  <SearchBoxComponent box-title="Anpassningar" type="adjust" image="../assets/round_arrows.svg"
    :searches="ingredients">
  </SearchBoxComponent>

  <div class="footer">
    <span>Träffar: 172</span>
    <button @click="$emit('update')" class="default-button">
      <RouterLink class="link" to="/results">Visa</RouterLink>
    </button>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 17px;
}
</style>
