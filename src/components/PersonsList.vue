<template>
  <div>
    <ul>
      <li v-for="person in props.persons" :key="person.id">
        {{ person.name }}
      </li>
    </ul>
    <v-btn color="primary" @click="changeName('Moreira')"
      >RAPAZ É ISSO MSM?</v-btn
    >

    <span>{{ name }}</span>

    <h1>FILHO</h1>
    <v-text-field v-model="myAge"></v-text-field>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, reactive, ref } from "vue";
import { PersonInterface } from "../types/Person";

const props = defineProps<{
  persons: PersonInterface[];
  age: number;
}>();

// const headers = reactive([
//   {
//     title: 'id', key: 'id',
//   },
//   {
//     title: 'Idade', key: 'age',
//   },
//   {
//     title: 'NOME', key: 'name',
//   },
// ])

let name = ref<string>("gabs");

const changeName = (newName: string) => (name.value = newName);

const myAge = defineModel<number>()
</script>


<style scoped>
</style>
