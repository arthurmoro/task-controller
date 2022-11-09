<template id="Menu">
  <v-navigation-drawer permanent>
    <v-list density="compact" nav>
      <v-list-item title="Task App" nav />
      <v-divider />
      <v-list-item v-for="(menuItem, index) in routes" :key="index">
        <router-link :to="menuItem.path">
          <v-icon color="black" v-if="menuItem.icon" :name="menuItem.icon" />
          {{ menuItem.name }}
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { routes } from "../../routes/index"
</script> 


<style scoped>
.active {
  padding-left: 20px;
  font-weight: bold;
}

a {
  transition: 100ms;
  font-size: 14px;
  text-decoration: none;
  color: var(--text-secondary);
  padding-left: 5px;
}
</style>