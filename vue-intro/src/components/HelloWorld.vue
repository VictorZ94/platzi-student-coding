<template lang="">
  <div>
    <h1 class="bg-black text-white" v-once v-text="greeting"></h1>
    <h1 v-once v-html="greeting"></h1>
    <!-- <h1>{{ greeting }}</h1> Son los mis que el de arriba --> 
    <img v-bind:[tag]="img" alt="">
    <!-- v-bind puede manejar atributos dinámicos -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      greeting: '<p>Welcome to Your Vue.js App</p>',
      img: "https://picsum.photos/200/300",
      tag: "src"
    }
  }
}
</script>