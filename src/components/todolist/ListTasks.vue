import { ref } from 'vue';
<template>
  <div>
    <v-list lines="three" select-strategy="classic">
      <v-list-subheader>To do List</v-list-subheader>
      <v-list-item v-for="(task, i) in props.listTask" :key="i" :value="i">
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <v-list-item-title>{{ task.title }}</v-list-item-title>

        <v-list-item-subtitle>
          {{ task.description }}
        </v-list-item-subtitle>
        <template v-slot:append>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>
            <v-list>
              <v-list-item @click="toggleDialog" value="1">
                <v-list-item-title>Editar</v-list-item-title>
              </v-list-item>
              <v-list-item value="2">
                <v-list-item-title @click="toggleDialog">Deletar</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
    <DialogTodo :dialog="dialog"></DialogTodo>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DialogTodo from './DialogTodo.vue';


const props = defineProps({
  listTask: Array,
})
const dialog = ref<boolean>(false)

const toggleDialog = () => {
  return dialog.value = !dialog.value
}
</script>
