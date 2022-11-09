<template id="ProjectCard">
  <v-card variant="outlined" class="my-8" :key="project.id">
    <v-btn @click="deleteProject" class="btn-delete" variant="plain">
      <v-icon name="fa-trash" color="red" />
    </v-btn>
    <v-card-title>{{ project.name }}</v-card-title>
    <v-card-text>
      {{ project.description || "Sem descrição" }}
    </v-card-text>
    <v-card-text>Criado em: {{ new Date(project.createdAt).toLocaleDateString("pt-br") }}</v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useNotification } from '../../hooks/notifications';
import { Project } from '../../interfaces/Project';
import { NotificationType } from '../../stores/notifications';
import { useProjectStores } from '../../stores/projects';


const props = defineProps<{ project: Project }>();
const project = computed(() => props.project);
const notification = useNotification();



function deleteProject() {
  if (confirm(`Você deseja confirmar a exclusão do projeto ${project.value.name}?`)) {
    const projectStore = useProjectStores();
    projectStore.removeProjects(project.value.id);
    notification(NotificationType.SUCCESS, "Projeto removido com sucesso!")
  }
}

</script>

<style scoped>
.btn-delete {
  position: absolute;
  right: 5px;
  top: 5px
}
</style>