<template id="AddProjectDialog">
  <v-row justify="center">
    <v-dialog max-width="600px" v-model="props.open">
      <v-card>
        <v-form @submit.prevent="addProject">
          <v-card-title>
            <h2>Novo Projeto</h2>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field variant="outlined" label="Nome do projeto*" :rules="nameRules" required v-model="name">
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-textarea variant="outlined" label="Descrição do projeto" v-model="description">
                  </v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn variant="outlined" @click="closeDialog">
              Fechar
            </v-btn>
            <v-btn type="submit" variant="outlined">
              Salvar
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref } from 'vue';
import { useNotification } from '../../hooks/notifications';
import { NotificationType } from '../../stores/notifications';
import { useProjectStores } from '../../stores/projects';



const props = defineProps<{ open: boolean }>();
const emit = defineEmits(["closeNewProjectDialog"]);
const name = ref("");
const description = ref("");

const nameRules = [(value: string) => !!value || "Nome do projeto é obrigatório"];

const addProject = () => {
  const projectStore = useProjectStores();
  projectStore.addProject({ name: name.value, description: description.value });
  const notificationHelper = useNotification();
  notificationHelper(NotificationType.SUCCESS, "Inserido com sucesso", 3)
  name.value = "";
  description.value = ""

  emit("closeNewProjectDialog");
}

const closeDialog = () => {
  emit("closeNewProjectDialog")
}


</script>