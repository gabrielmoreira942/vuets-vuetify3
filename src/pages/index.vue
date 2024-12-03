<template>
  <v-container>
    <v-row>

      <apexchart type="line" :options="lineChartOptions" :series="lineSeries" height="350" />

      <apexchart type="bar" :options="barChartOptions" :series="barSeries" height="350" />

      <apexchart type="pie" :options="pieChartOptions" :series="pieSeries" height="350" />

      <apexchart type="area" :options="areaChartOptions" :series="areaSeries" height="350" />
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ApexCharts from 'vue3-apexcharts';

const tab = ref(0); // Controla qual aba está ativa

// Opções e dados do gráfico de linha
const lineChartOptions = ref({
  chart: {
    type: 'line',
    height: 350,
    toolbar: { show: false },
  },
  title: {
    text: 'Vendas Mensais (Linha)',
    align: 'center',
  },
  xaxis: {
    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  },
});
const lineSeries = ref([
  {
    name: 'Vendas',
    data: [10, 41, 35, 51, 49, 62],
  },
]);

// Opções e dados do gráfico de barras
const barChartOptions = ref({
  chart: {
    type: 'bar',
    height: 350,
    toolbar: { show: false },
  },
  title: {
    text: 'Vendas Mensais (Barras)',
    align: 'center',
  },
  xaxis: {
    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  },
});
const barSeries = ref([
  {
    name: 'Vendas',
    data: [10, 41, 35, 51, 49, 62],
  },
]);

// Opções e dados do gráfico de pizza
const pieChartOptions = ref({
  chart: {
    type: 'pie',
    height: 350,
    toolbar: { show: false },
  },
  title: {
    text: 'Distribuição de Vendas (Pizza)',
    align: 'center',
  },
});
const pieSeries = ref([44, 55, 13, 43]);

// Opções e dados do gráfico de área
const areaChartOptions = ref({
  chart: {
    type: 'area',
    height: 350,
    toolbar: { show: false },
  },
  title: {
    text: 'Vendas Mensais (Área)',
    align: 'center',
  },
  xaxis: {
    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  },
});
const areaSeries = ref([
  {
    name: 'Vendas',
    data: [10, 41, 35, 51, 49, 62],
  },
]);
</script>

<style scoped>
/* Adiciona estilos personalizados, se necessário */
</style>
