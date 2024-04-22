<template>
    <form v-on:submit.prevent="submit">  <!-- submit -->
        
        <button>Counter {{ counter }}</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        submit(e) {
            // e.preventDefault(); // Funciona así.
            this.counter++
        }
    }
}
</script>
