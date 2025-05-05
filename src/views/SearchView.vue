<script setup>
import SearchBoxComponent from '../components/SearchBoxComponent.vue'
import IngredientService from '../components/IngredientService.vue'
import CustomerListComponent from '../components/CustomerListComponent.vue';
import VueSlider from "vue-3-slider-component"
</script>

<script>
export default {
  data() {
    return {
      themes: null,
      ingredients: null,
      sliderValue: 500,
    }
  },

  created() {
    this.themes = IngredientService.getThemes()
    this.ingredients = IngredientService.getIngredients()
  },

  methods: {
    windowToggle() {
      let state = document.getElementById("list-window").style.display
      if (state === "none" || state === "") {
        document.getElementById("list-window").style.display = "block"
      }
      else {
        document.getElementById("list-window").style.display = "none"
      }
    },

    showToast() {
      const toasts = document.getElementsByClassName("toast")
      const footer = document.getElementById("footer")
      for (const toast of toasts) {
        toast.classList.add("toast-visible")
      }
      footer.classList.add("footer-hide")
      setTimeout(() => {
        const toasts = document.getElementsByClassName("toast")
        for (const toast of toasts) {
          toast.classList.remove("toast-visible")
        }
        footer.classList.remove("footer-hide")
      }, 2000)
    }
  }
}

</script>

<template>
  <div class="top">
    <img src="../assets/search.svg" alt="search icon" />
    <input class="top-search" type="search" placeholder="Sök på en rätt" />
    <button @click="windowToggle" class="save-button">
      <img src="../assets/like_default.svg" alt="like button heart" />
      Sparade listor
    </button>
  </div>

  <div class="course-box">
    <div class="radio-box">
      <input class="course-radio" type="radio" name="course-selector" id="pre" />
      <label for="pre">Förrätt</label>
    </div>

    <div class="radio-box">
      <input class="course-radio" type="radio" name="course-selector" id="main" checked />
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
    <img src="../assets/receive_payment.svg" alt="money icon" />
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

  <CustomerListComponent @closeWindow="windowToggle" id="list-window"></CustomerListComponent>

  <SearchBoxComponent @list-dupe="showToast" box-title="Tema" type="theme" :searches="themes"></SearchBoxComponent>
  <SearchBoxComponent @list-dupe="showToast" box-title="Ingredienser" type="ingredients" :searches="ingredients">
  </SearchBoxComponent>
  <SearchBoxComponent @list-dupe="showToast" box-title="Får ej förekomma" type="disallowed" image="../assets/info.svg" :searches="ingredients">
  </SearchBoxComponent>
  <SearchBoxComponent @list-dupe="showToast" box-title="Anpassningar" type="adjust" image="../assets/round_arrows.svg" :searches="ingredients">
  </SearchBoxComponent>

  <div class="toast">Filtret finns redan i listan!</div>
  <div class="footer" id="footer">
    <span>Träffar: 172</span>
    <button class="default-button">
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

.footer-hide {
  display: none;
}

.save-button:hover {
  cursor: pointer;
  background-color: #7c75ab;
}

.toast {
  display: none;
  margin-top: 10px;
  padding: 5px 5px 5px 5px;
  border-radius: 5px;
  background-color: #7c75ab;
  color: #fff;
}

.toast-visible {
  display: block;
}
</style>
