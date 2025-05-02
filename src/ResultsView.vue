<script setup>
import SearchResult from "./components/SearchResult.vue"
import ResultSummary from "./components/ResultSummary.vue"
// import SearchView from "./SearchView.vue"
</script>

<script>
export default {
  data() {
    return {
    }
  },

  components: {
    SearchResult,
    ResultSummary,
  },
}
</script>

<template>
  <div class="filter-box">
    <div class="title">Valda filter:</div>
    <div class="results">
      <SearchResult text="BBQ"></SearchResult>
      <SearchResult text="Nötkött" class="ingredients"></SearchResult>
      <SearchResult text="Mjölk" class="disallowed"></SearchResult>
      <SearchResult text="Ägg" class="adjust"></SearchResult>
    </div>
    <div class="button-box">
      <button class="default-button"><RouterLink class="link" to="/">Redigera sökning</RouterLink></button>
      <button class="default-button"><RouterLink class="link" to="/">Ny sökning</RouterLink></button>
    </div>
  </div>
  <div class="hits">172 träffar</div>
  <div class="result-summaries">
    <ResultSummary title="BBQ-grillade nötköttsspett" theme="BBQ-tema, nötkött" adjust="Ägg" price="190" cost="100"></ResultSummary>
    <ResultSummary></ResultSummary>
    <ResultSummary></ResultSummary>
    <ResultSummary></ResultSummary>
    <ResultSummary></ResultSummary>
  </div>
</template>

<style scoped>
.filter-box {
  border: 1px solid #7C75AB;
  border-radius: 5px;
  width: 100%;
  height: auto;

  box-sizing: border-box;
  padding: 10px 10px 10px 10px;
}

.title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
}

.results {
  display: flex;
  gap: 5px;
  margin-bottom: 16px;
}

.button-box {
  display: flex;
  gap: 20px;
}

.hits {
  margin: 7px 0px 10px 0px;

  font-size: 12px;
  font-weight: 600;
}
</style>
