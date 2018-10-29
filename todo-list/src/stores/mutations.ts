import { MUTATION_NAME } from "../config";
import { State, Mode } from "./state";
import uuid from "uuid";

export const mutations = {
  [MUTATION_NAME.ADD_TODO](state: State, taskName: string) {
    if (taskName === "") {
      return;
    }

    state.tasks.push({
      name: taskName,
      done: false,
      id: uuid.v4()
    });
  },
  [MUTATION_NAME.DONE_TASK](state: State, id: string) {
    let task = state.tasks.find(task => task.id === id);

    if (!task) {
      throw new Error(`Cannot find task that id is ${id}`);
    } else {
      task.done = true;
    }
  },
  [MUTATION_NAME.UPDATE_MODE](state: State, mode: Mode) {
    state.mode = mode;
  },
  [MUTATION_NAME.CLEAR_TASKS](state: State) {
    // wait GC
    // reset task
    state.tasks = [];
  }
};
