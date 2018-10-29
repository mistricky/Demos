import { Getter } from "vuex";
import { State, Task } from "./state";

type Getters<T> = { [index: string]: Getter<T, T> };

export const getters: Getters<State> = {
  mode: (state: State) => state.mode,
  tasks: (state: State): Task[] =>
    state.mode === "allTasks"
      ? state.tasks
      : state.tasks.filter(
          task => (state.mode === "allDoneTasks" ? task.done : !task.done)
        )
};
