<script setup>
import SearchPinComponent from "./components/SearchPinComponent.vue"
import ResultBoxComponent from "./components/ResultBoxComponent.vue"
</script>

<script>
export default {}
</script>

<template>
  <div class="filter-box">
    <div class="title">Valda filter:</div>
    <div class="results">
      <SearchPinComponent text="Varmrätt"/>
      <SearchPinComponent text="BBQ"/>
      <SearchPinComponent text="Nötkött" class="ingredients"/>
      <SearchPinComponent text="Skaldjur" class="disallowed"/>
      <SearchPinComponent text="Ägg" class="adjust"/>
    </div>
    <div class="button-box">
      <button class="default-button"><RouterLink class="link" to="/">Redigera sökning</RouterLink></button>
      <button class="default-button"><RouterLink class="link" to="/">Ny sökning</RouterLink></button>
    </div>
  </div>
  <div class="hits">172 träffar</div>
  <div class="result-summaries">
    <ResultBoxComponent title="BBQ-grillade nötköttsspett" theme="BBQ-tema, nötkött" adjust="Ägg" price="190" cost="100"/>
    <ResultBoxComponent title="Rökig nötköttsburgare" adjust="Ägg, gluten" price="245" cost="145"/>
    <ResultBoxComponent title="Grillade nötköttsbiffar med fetaost" theme="Nötkött" adjust="Ägg, gluten" price="245" cost="145"/>
    <ResultBoxComponent title="BBQ-fyllda tortillawraps med bönor och nötfärs" theme="BBQ-tema, nötkött" adjust="Gluten" price="190" cost="100"/>
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
