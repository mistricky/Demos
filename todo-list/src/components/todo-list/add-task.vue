<template>
  <div id="add-task">
    <input v-model="taskName" type="text"/>
    <button @click="handleAddTodoClick">Add Task</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TodoListStore } from "@/stores";
import { mapActions } from "vuex";
import { Action } from "vuex-class";

@Component({
  data: () => ({ taskName: "" }),
  store: TodoListStore,
  methods: {
    ...mapActions(["addTodo"])
  }
})
export default class AddTask extends Vue {
  @Action("addTodo")
  private addTodo!: any;

  handleAddTodoClick() {
    this.addTodo(this.$data.taskName);
  }
}
</script>
