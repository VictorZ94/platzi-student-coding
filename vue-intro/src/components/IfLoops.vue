<template lang="">
    <div class="container" :class="styles">
        <h2>{{ text }}</h2>
        <div v-if="open">
            <p>Hola, {{ username }}</p>
            <div class="list">
                <div v-for="(item, i) in posts" :key="i" class="item">
                    <div class="title">{{ item.title }}</div>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
        <div v-else>
            <div>Username</div>
            <input type="text" v-model="username" />    
        </div>
        <button @click="open = !open">
            <div v-if="!open">Acceder</div>
            <div v-else>Salir</div>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: "Accede a tu cuenta",
            open: false,
            username: "",
            posts: [{
                title: "Titulo 1",
                description: "Lorem ipsum..."
            }, {
                title: "Titulo 2",
                description: "Lorem ipsum..."
            }, {
                title: "Titulo 3",
                description: "Lorem ipsum..."
            }, {
                title: "Titulo 4",
                description: "Lorem ipsum..."
            }]
        };
    },
    watch: {
        open(value) {
            if (value) {
                this.text = "Cierra sesión";
            } else {
                this.text = "Accede a tu cuenta";
                this.username = "";
            }
        }
    },
    computed: {
        label() {
            return this.open ? "Salir" : "Acceder";
        },
        styles() {
            return this.open ? ['open'] : ['closed'];
        }
    },
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
    .list {
        display: flex;
        flex-direction: column;
    }
    .item {
        border: 1px solid black;
    }
    .title {
        font-weight: bold;
        font-size: 1.2rem;
    }
</style>