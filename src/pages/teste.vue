<template>
  <div>
    <h1>PAI</h1>
    <v-text-field v-model="age"></v-text-field>
    <persons-list :persons="persons" v-model="age"></persons-list>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { PersonInterface } from "../types/Person";
let persons = reactive<PersonInterface[]>([
  {
    id: 5,
    age: 3,
    name: "gabs",
  },
  {
    id: 3,
    age: 3,
    name: "gabs",
  },
]);
let age = ref<number>(24)

</script>
