<template id="Projects">
  <v-container>
    <v-row>
      <v-col align-self="center">
        <h1>Seus projetos:</h1>
        <v-btn @click="openDialog" variant="outlined">
          <v-icon class="icon-btn" color="black" name="fa-plus" />
          <p>Novo projeto</p>
        </v-btn>
      </v-col>
    </v-row>
    <v-col order="12">
      <p v-if="!hasProjects">
        Sem projetos cadastrados
      </p>
      <ProjectCard v-for="project in projectsStore.getProjects" :project="project" />
    </v-col>
  </v-container>
  <AddProject :open="state.isNewProjectDialogOpen" @closeNewProjectDialog="closeDialog" />
</template>
  


<script lang="ts" setup>

import { computed, reactive } from 'vue';
import AddProject from '../components/Projects/AddProject.vue';
import ProjectCard from '../components/Projects/ProjectCard.vue';
import { useProjectStores } from '../stores/projects'

const state = reactive({ isNewProjectDialogOpen: false });

const projectsStore = useProjectStores();
const hasProjects = computed(() => projectsStore.getProjects.length > 0);

function openDialog() {
  state.isNewProjectDialogOpen = true;
}
function closeDialog() {
  state.isNewProjectDialogOpen = false;
}

</script>

<style scoped>
.icon-btn {
  width: 18px;
  padding: 3px;
  height: 18px;
  color: white;
  font-size: 12px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: black;
}
</style>