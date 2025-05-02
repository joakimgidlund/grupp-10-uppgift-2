import "./assets/main.css"

import { createApp } from "vue"
import { createWebHistory, createRouter } from "vue-router"

import App from "./App.vue"
import ResultsView from "./ResultsView.vue"
import SearchView from "./SearchView.vue"
import DishView from "./DishView.vue"

const routes = [
  { path: "/", component: SearchView },
  { path: "/results", component: ResultsView },
  { path: "/dishinfo", component: DishView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount("#app")
