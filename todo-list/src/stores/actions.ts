import { ActionContext, Action } from "vuex";
import { State } from "./state";
import { MUTATION_NAME } from "@/config";

type Actions<T> = { [index: string]: Action<T, T> };

export const actions: Actions<State> = {
  addTodo({ commit }: ActionContext<State, State>, taskName: string) {
    commit(MUTATION_NAME.ADD_TODO, taskName);
  },
  doneTask({ commit }: ActionContext<State, State>, id: string) {
    commit(MUTATION_NAME.DONE_TASK, id);
  },
  updateMode({ commit }: ActionContext<State, State>, mode: string) {
    commit(MUTATION_NAME.UPDATE_MODE, mode);
  },
  clearTasks({ commit }: ActionContext<State, State>) {
    commit(MUTATION_NAME.CLEAR_TASKS);
  }
};
