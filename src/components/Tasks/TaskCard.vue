<template id="TaskCard">
  <v-row justify="center">
    <v-col cols="11">
      <v-card variant="outlined" :key="task.id">
        <v-card-title>
          <p>{{ task.name }}</p>
          <v-btn @click="deleteTask" class="btn-delete" variant="plain">
            <v-icon name="fa-trash" color="red" />
          </v-btn>
        </v-card-title>
        <v-card-subtitle>{{ task.projectName }}</v-card-subtitle>
        <v-card-text>
          <p>{{ task.description }}</p>

          <small>
            Criada em: {{ task.createdAt }}
          </small>
        </v-card-text>

      </v-card>
    </v-col>
  </v-row>
</template>



<script setup lang="ts">
import { defineProps, computed, defineEmits } from 'vue';
import { Task } from '../../interfaces/Task';

const props = defineProps<{ task: Task }>()

const emit = defineEmits(["deleteTask"]);

const task = computed(() => ({
  ...props.task,
  createdAt: `${new Date(props.task.createdAt).toLocaleDateString()} às ${new Date(props.task.createdAt).toLocaleTimeString()}`
}))


function deleteTask() {
  emit("deleteTask", task.value.id, task.value.projectId)
}
</script>

<style scoped>
.btn-delete {
  position: absolute;
  right: 5px;
  top: 5px
}
</style>