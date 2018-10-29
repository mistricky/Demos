<template>
  <div id="todo-list">
    <ViewControl></ViewControl>
    <AddTask></AddTask>
    <TaskList></TaskList>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddTask from "./add-task.vue";
import TaskList from "./task-list.vue";
import ViewControl from "./view-control.vue";

@Component({
  components: { AddTask, TaskList, ViewControl }
})
export default class TodoList extends Vue {}
</script>
