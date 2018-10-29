export type Mode = "allTasks" | "allDoneTasks" | "allUnDoneTasks";

export interface Task {
  id: string;
  name: string;
  done: boolean;
}

export interface State {
  tasks: Task[];
  mode: Mode;
}

export const state: State = {
  tasks: [],
  mode: "allTasks"
};
