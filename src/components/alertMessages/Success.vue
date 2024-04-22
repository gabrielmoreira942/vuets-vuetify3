<template>
  <div>
    <v-snackbar :timeout="2000" color="success" variant="outlined" v-model="props.snackbar">

      Snackbar with <strong>outlined</strong> variant.
    </v-snackbar>
  </div>
</template>

<script setup>

const props = defineProps({
  snackbar: Boolean
})
</script>
