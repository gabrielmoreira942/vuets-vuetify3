<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
          subtitle="john@google.com"
          title="John Leider"
        >
          <template v-slot:append>
            <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn>
          </template>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list :lines="false" density="compact" nav>

      <router-link  v-for="(item, i) in items"
          :key="i"
          :to="item.to">
          <v-list-item

          :value="item"
          color="primary"
          >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title :textContent="item.text"></v-list-item-title>
        </v-list-item>
      </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>{{ route.name }}</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup >
  import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router';
import { SideInterface } from '../types/Layout';
  const drawer = ref(null)
  const route = useRoute()
  console.log(route);
  let items = reactive<SideInterface[]>([
        { text: 'Teste', icon: 'mdi-folder', to: '/teste' },
        { text: 'To do List', icon: 'mdi-account-multiple' , to: '/todolist'},
        { text: 'Starred', icon: 'mdi-star' , to: '/'},
        { text: 'Recent', icon: 'mdi-history' , to: '/'},
        { text: 'Offline', icon: 'mdi-check-circle' , to: '/'},
        { text: 'Uploads', icon: 'mdi-upload' , to: '/'},
        { text: 'Backups', icon: 'mdi-cloud-upload' , to: '/'},
      ]);
</script>

<style scoped>
 a{
  text-decoration: none;
  color: white;
 }
</style>
