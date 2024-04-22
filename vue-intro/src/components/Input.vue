<template lang="">
    <div>
        <h1>{{ text }}</h1>
        <!-- Usamos : para los Atributos v-bind y el @ para los Eventos v-on-->
        <input
            type="text"
            @input="input"
            :value="text"
        />
        <!-- Hacen exactamente lo mismo -->
        <input
            type="text"
            v-model="text"
        />
    </div>
    <!-- input and value pueden ser cambiados por v-model es la forma de manejar datos en ambos direcciones. -->
</template>

<script>
export default {
    data() {
        return {
            text: "Hola vue"
        }
    },
    methods: {
        input(e) {
            this.text = e.target.value
        }
    },

}
</script>

<style>
input {
    border: 1px solid black;
}
</style>
