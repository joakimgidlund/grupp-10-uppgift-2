<script setup>
import SearchResult from './SearchPinComponent.vue'
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
      event.target.value = ""
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
      <option v-for="search in searches" :key="search" :value="search"></option>
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

<style scoped>

.search-box {
  border: 1px solid #7c75ab;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 8px 0px 8px 10px;

  margin-top: 15px;
}

.search-box input {
  width: 220px;
  height: 23px;
  border: 1px solid #000;
  border-radius: 3px;
  padding-left: 5px;
}

.search-header {
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
}

.result-box {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 7px;
  gap: 6px;
}
</style>
