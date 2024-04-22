<template>
  <div>
    <v-dialog v-model="props.dialog" width="600">
      <v-card prepend-icon="mdi-update" title="Editar tarefa">
        <v-card-title>
          <v-card-text>
                <v-text-field v-model="props.task.title" label="Título"></v-text-field>
                <v-text-field v-model="props.task.description" label="Descrição"></v-text-field>
          </v-card-text>
        </v-card-title>
        <v-card-actions>
          <v-row>
            <v-col >
              <v-btn class="ms-auto" text="Cancelar" @click="$emit('dialogEmit', false), $emit('success', true)"></v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn class="ms-auto" text="Editar" @click="$emit('dialogEmit', false), $emit('success', true)"></v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  dialog: Boolean,
  task: Object,
})
</script>
