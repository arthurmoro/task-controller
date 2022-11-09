import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ProjectsVue from "../views/Projects.vue";
import TasksVue from "../views/Tasks.vue";

type Menu = RouteRecordRaw & {
  icon: String;
};

export const routes: Menu[] = [
  {
    name: "Tarefas",
    path: "/",
    icon: "fa-tasks",
    component: TasksVue,
  },
  {
    name: "Projetos",
    path: "/projects",
    icon: "fa-project-diagram",
    component: ProjectsVue,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: routes,
});
