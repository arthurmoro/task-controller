<template id="Tasks">

  <div class="new-task">
    <form @submit.prevent="addTask">
      <v-row justify="center" align-content="center">
        <v-col cols="6">
          <v-text-field v-model="name" :rules="nameRules" variant="outlined" name="name" label="Nome da tarefa*"
            required density="compact" />
        </v-col>
        <v-col cols="4">
          <v-select v-model="project" :rules="projectRules" :items="projects" variant="outlined" label="Projeto*"
            item-title="name" item-value="id" clearable density="compact" required>
          </v-select>
        </v-col>
        <v-col>
          <v-btn type="submit" variant="outlined">Adicionar</v-btn>
        </v-col>
      </v-row>
    </form>
  </div>
  <v-container>

    <TaskCard v-for="task in tasks" :task="task" @deleteTask="deleteTask" />

  </v-container>
</template>
  


<script lang="ts" setup>
import { ref, computed } from "vue";
import TaskCard from "../components/Tasks/TaskCard.vue"
import { useNotification } from "../hooks/notifications";
import { NotificationType } from "../stores/notifications";
import { useProjectStores } from '../stores/projects';

const projectStore = useProjectStores();
const notifications = useNotification();
const projects = projectStore.getProjects;
const tasks = computed(() => projectStore.getTasks);

const name = ref("")
const project = ref("")

const nameRules = [(value: string) => !!value || "Nome da tarefa é necessário"]
const projectRules = [(value: string) => !!value || "Selecione um projeto"]

function addTask() {
  projectStore.addTask({ name: name.value, projectId: project.value })
  notifications(NotificationType.SUCCESS, "Tarefa inserida com sucesso");
}

function deleteTask(taskId: string, projectId: string) {
  console.log(taskId, projectId)
  projectStore.removeTask(taskId, projectId);
  notifications(NotificationType.SUCCESS, "Tarefa removida");

}

</script>


<style>
.new-task {
  width: 100%;
  padding: 10px;
}
</style>