<template>
  <div>
    <v-container>
      <v-form @submit.prevent="addTask">
        <v-row>
          <v-col>
            <v-text-field :rules="rules" label="Escreva sua tarefa" v-model="tasks.title"></v-text-field>
            <v-text-field :rules="rules" label="Escreva a descrição" v-model="tasks.description"></v-text-field>
          </v-col>
        </v-row>
        <v-btn type="submit" color="primary">Adicionar Tarefa</v-btn>
      </v-form>
    </v-container>
    <ListTasks :listTask="listTask"></ListTasks>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { ListTaskInterface } from '../../types/Task';
import ListTasks from './ListTasks.vue'


// Variables
const tasks = reactive<ListTaskInterface>({
  title: '',
  description: '',
})
const rules = ref([v => !!v || 'Esse campo é obrigatório'])
const listTask = reactive<ListTaskInterface[]>([])

// Functions
const addTask = () => {
  listTask.push({ ...tasks })
}
</script>
