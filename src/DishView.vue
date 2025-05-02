<template>
  <div class="main">
    <div class="header">
      <RouterLink class="link" to=/results><img src="./assets/back.svg" alt="back icon">Gå tillbaka</RouterLink>
      <button class="save-button purple">
      <img src="./assets/like_default.svg" alt="like button heart" />
      Sparade listor
    </button>
    </div>
    <div class="guide-box">
      <h1 class="title">BBQ-grillade nötköttsspett</h1>
      <div class="basic-info">
        <h2>Grundläggande information:</h2>
        <ul>
          <li>Kategori: Varmrätt - Nötkött - BBQ</li>
          <li>Allergener: Innehåller ej skaldjur</li>
          <li>Pris/portion för köket: 100kr</li>
          <li>Pris/portion för kund: 190kr</li>
        </ul>
      </div>
      <div class="prep">
        <h2>Tillagning:</h2>
        <ul>
          <li>Tillagningstids: ca 30 min</li>
          <li>Förberedelser protein: På plats</li>
          <li>Förberedelser kolhydrat: Innan, kyl</li>
          <li>Tillagningsmetod: Grillning eller ugn</li>
          <li>Svårighetsgrad: Medel</li>
        </ul>
      </div>
      <div class="recommendations">
        <h2>Passar för:</h2>
        <ul>
          <li>Glutenintoleranta</li>
          <li>Äggallergiker</li>
          <li>Ej vegetarisk kost</li>
        </ul>
      </div>
      <div class="ingredients">
        <div class="vborder"></div>
        <h2>Ingredienser:</h2>
        <ul>
          <li>Nötköttsspett</li>
          <li>BBQ-marinad</li>
          <ul>
            <li>Sweet chili sås</li>
            <li>Sojasås</li>
            <li>Vitlök</li>
            <li>Timjan</li>
            <li>Paprikapulver</li>
          </ul>
          <li>Grillade grönsaker</li>
          <ul>
            <li>Zucchini</li>
            <li>Paprika</li>
            <li>Majs</li>
          </ul>
          <li>Potatissallad</li>
          <ul>
            <li>Potatis</li>
            <li>Majonäs</li>
            <li>Gräddfil</li>
            <li>Dijonsenap</li>
            <li>Dill</li>
            <li>Svartpeppar</li>
            <li>Salt</li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-size: 16px;
  font-weight: 400;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  margin-bottom: 20px;

  height: 40px;
  background: #7C75AB;

  color: #fff;
}

.link {
  display: flex;
  align-items: center;
  gap: 5px;
}

.link:hover {
  cursor: pointer;
  text-decoration: underline;
}

.purple {
  background-color: #7C75AB;
  border: 1px solid white;
  color: white;
}

/* Changing the color of the .svg for the heart icon */
.purple img {
  filter: invert(95%) sepia(100%) saturate(0%) hue-rotate(162deg) brightness(104%) contrast(102%);
}

.guide-box {
  display: grid;
  grid-template-columns: 380px 1fr;
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    "header header"
    "info ingredients"
    "prep ingredients"
    "recommendations ingredients";

  row-gap: 40px;
  column-gap: 10px;
}

.title {
  grid-area: header;
  font-size: 20px;
  font-weight: 600;
}

.basic-info {
  grid-area: info;
  border-bottom: 1px solid #D9D9D9;
}

.prep {
  grid-area: prep;
  border-bottom: 1px solid #D9D9D9;
}

.recommendations {
  grid-area: recommendations;
}

.ingredients {
  grid-area: ingredients;
  border-left: 1px solid #D9D9D9;
  padding-left: 22px;
}

h2 {
  font-size: 16px;
  font-weight: 600;
}

ul {
  list-style-position: inside;
}

ul ul {
  padding-left: 10px;
}
</style>
