import SearchResult from "./SearchResult.js"

export default {
    props: {
        boxTitle: String,
        searches: Array,
        image: String,
        type: String
    },

    components: {
        SearchResult
    },

    data() {
        return {
            searchResults: [],
        }
    },

    methods: {
        addSearch(event) {
            if(!this.searchResults.includes(event.target.value)) {
                this.searchResults.push(event.target.value)
            }
            event.target.value = ""
        },

        removeElement(text) {
            const index = this.searchResults.indexOf(text)
            this.searchResults.splice(index, 1)
        }
    },

    template: `
    <div class="search-box">
        <div class="search-header">
            <img v-if="image" :src="image">
            {{boxTitle}}
        </div>
        <input type="list" :list="boxTitle" placeholder="Sök..." @change="addSearch">
        <datalist :id="boxTitle">
            <option v-for="search in this.searches" :value=search />
        </datalist>
        <div class="result-box">
            <search-result @remove="removeElement" :text="result" :class=type v-for="result in searchResults"></search-result>
        </div>
    </div>
    `
}