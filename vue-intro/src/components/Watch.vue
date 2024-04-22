<template lang="">
    <div>
        <h1>{{ text }}</h1>
        <button @click="open = !open">{{ open ? "Open!" : "Close!" }}</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text: "Door closed!",
            open: false
        }
    },
    computed: {
        label() {
            this.open ? "Open!" : "Close!";
        }
    },
    watch: {
        open(value) {
            if (value) {
                this.text = "Door closed!";
            } else {
                this.text = "Door open!";
            }
        }
    }
}
</script>

<style>
    html, body {
        height: 100vh;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
    #app, .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
    button {
        margin-top: 24px;
        border: none;
        background-color: white;
        padding: 8px 24px;
        border-radius: 12px;
    }
    .closed {
        background-color: #eca1a6;
    }
    .open {
        background-color: #b5e7a0;
    }
</style>
