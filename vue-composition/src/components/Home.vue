<template lang="">
  <div>{{ user.name }}</div>
  <form @submit="handleSubmit">
    <input type="text" name="name" id="name" v-model="user.name"/>
    <input type="text" name="last_name" id="last_name" v-model="user.last_name"/>
    <input type="number" name="age" id="age" v-model="user.age">
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
  import { reactive } from 'vue';

  const user = reactive({
    name: '',
    last_name: '',
    age: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(user))
  }

</script>

<style>
input {
  display: block
}
</style>