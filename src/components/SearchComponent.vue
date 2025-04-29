<script setup>
import SearchResult from './SearchResult.vue'
</script>

<script>
export default {
  props: {
    boxTitle: String,
    searches: Array,
    image: String,
    type: String,
  },

  data() {
    return {
      searchResults: [],
    }
  },

  methods: {
    addSearch(event) {
      if (!this.searchResults.includes(event.target.value)) {
        this.searchResults.push(event.target.value)
      }
      event.target.value = ''
    },

    removeElement(text) {
      const index = this.searchResults.indexOf(text)
      this.searchResults.splice(index, 1)
    },
  },
}
</script>

<template>
  <div class="search-box">
    <div class="search-header">
      <img v-if="image" :src="image" alt="" />
      {{ boxTitle }}
    </div>
    <input type="list" :list="boxTitle" placeholder="Sök..." @change="addSearch" />
    <datalist :id="boxTitle">
      <option v-for="search in this.searches" :key="search" :value="search"></option>
    </datalist>
    <div class="result-box">
      <SearchResult
        @remove="removeElement"
        :text="result"
        :class="type"
        v-for="result in searchResults"
        :key="result"
      ></SearchResult>
    </div>
  </div>
</template>
