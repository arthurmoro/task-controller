import { defineStore } from "pinia";
import { generateId } from "../helpers/generateId";
import { NewProjectParams, Project } from "../interfaces/Project";
import { NewTask, Task } from "../interfaces/Task";

export const useProjectStores = defineStore("projects", {
  state: (): { projects: Project[] } => {
    const projects = JSON.parse(localStorage.getItem("projects") || "[]");
    return {
      projects,
    };
  },
  getters: {
    getProjects(state): Project[] {
      return state.projects;
    },
    getTasks(state): Task[] {
      return state.projects.reduce((tasks: Task[], project: Project) => {
        return [
          ...tasks,
          ...project.tasks.map((_task) => ({
            ..._task,
            projectName: project.name,
            projectId: project.id,
          })),
        ];
      }, []);
    },
  },
  actions: {
    addProject(newProject: NewProjectParams) {
      const project: Project = {
        tasks: [],
        id: generateId(),
        createdAt: new Date(),
        ...newProject,
      };
      this.projects.push(project);
      localStorage.setItem("projects", JSON.stringify(this.projects));
    },
    removeProjects(projectId: String) {
      this.projects = this.projects.filter((project: Project) => project.id !== projectId);
      console.log(this.projects);
      localStorage.setItem("projects", JSON.stringify(this.projects));
    },
    addTask(newTask: NewTask) {
      const task = {
        id: generateId(),
        name: newTask.name,
        createdAt: new Date(),
      };

      this.projects = this.projects.map((project: Project) => {
        if (project.id === newTask.projectId) {
          project.tasks ? project.tasks.push(task) : (project.tasks = [task]);
        }
        return project;
      });

      localStorage.setItem("projects", JSON.stringify(this.projects));
    },
    removeTask(taskId: string, projectId: string) {
      this.projects = this.projects.map((project) => {
        if (project.id === projectId) {
          project.tasks = project.tasks.filter((task) => task.id !== taskId);
        }
        return project;
      });

      localStorage.setItem("projects", JSON.stringify(this.projects));
    },
  },
});
