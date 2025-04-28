export default {
    props: {
        text: String,
        type: String,
    },

    emits: ["remove"],

    template:
        `
        <div class="result-pin">
            <button @click="$emit('remove', this.text)"><img src="../assets/cross.svg" alt="cross to remove search"></button>
            {{ text }}
        </div>
        `
}