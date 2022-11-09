export interface NewTask {
  name: string;
  projectId: string;
}

export interface Task {
  id: string;
  name: string;
  description?: string;
  projectName?: string;
  projectId?: string;
  startedAt?: Date;
  endedAt?: Date;
  createdAt: Date;
}
