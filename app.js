import SearchComponent from "./components/SearchComponent.js"
import IngredientService from "./components/IngredientService.js"

const app = {
    data() {
        return {
            themes: null,
            ingredients: null,
        }
    },

    created() {
        this.themes = IngredientService.getThemes()
        this.ingredients = IngredientService.getIngredients()
    }
}

const vueApp = Vue.createApp(app) 
vueApp.component("search-component", SearchComponent)
vueApp.mount("#app")