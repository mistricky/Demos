<template>
  <div>
    <div v-for="task in tasks" :key="task.id">
      <TaskItem :name="task.name" :done="task.done" :id="task.id"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import { Getter } from "vuex-class";
import { mapGetters } from "vuex";
import { Task, TodoListStore } from "@/stores";
import TaskItem from "./task-item.vue";

@Component({
  data: () => ({
    viewTasks: []
  }),
  store: TodoListStore,
  components: {
    TaskItem
  },
  ...mapGetters(["allTasks"])
})
export default class TaskList extends Vue {
  @Getter("tasks")
  tasks!: Task[];
}
</script>
