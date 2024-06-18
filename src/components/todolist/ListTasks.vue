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
              <v-list-item @click="toggleDialogEdit(i)" value="1">
                <v-list-item-title>Editar</v-list-item-title>
              </v-list-item>
              <v-list-item @click="toggleDialogDelete(i)" value="2">
                <v-list-item-title>Deletar</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
    <DialogTodo
      @dialogEmit="toggleDialogEdit"
      @success="snackbar = $event"
      :task="listTask[indexSelected]"
      :dialog="dialogEdit"
    >
    </DialogTodo>
    <DialogTodoDelete
      @dialogEmit="toggleDialogDelete"
      :dialog="dialogDelete"
    ></DialogTodoDelete>
    <Success :snackbar="snackbar"></Success>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  listTask: Array,
});
const indexSelected = ref<number>(0);
const dialogEdit = ref<boolean>(false);
const dialogDelete = ref<boolean>(false);
const snackbar = ref<boolean>(false);
const toggleDialogEdit = (i: number) => {
  dialogEdit.value = !dialogEdit.value;
  if (i != null && props.listTask[i] != null) {
    indexSelected.value = i;
  }
};
const toggleDialogDelete = (i: number) => {
  dialogDelete.value = !dialogDelete.value;
  if (i != null && props.listTask[i] != null) {
    indexSelected.value = i;
  }
};
</script>
