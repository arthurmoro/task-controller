<template>
  <Notification />
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>

</template>

<script  lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar/Menu.vue';
import Notification from './components/helpers/Notification.vue';

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    Notification
  }
})
</script>

<style>
.content {
  padding: 100px;
}
</style>
