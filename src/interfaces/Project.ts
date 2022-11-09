import { Task } from "./Task";

export interface Project {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt?: Date;
  tasks: Task[];
}

export interface NewProjectParams {
  name: string;
  description?: string;
  tasks?: Task[];
}
