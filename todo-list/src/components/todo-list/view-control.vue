<template>
  <div>
    <button @click="handleUpdateMode('allTasks')">view all task</button>
    <button @click="handleUpdateMode('allDoneTasks')">view all completed task</button>
    <button @click="handleUpdateMode('allUnDoneTasks')">view all haven't completed task</button>
    <button @click="handleClearTasks">clear all task</button>
    <p>{{mode}}</p>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Mode, TodoListStore } from "@/stores";
import { Action, Getter } from "vuex-class";
import { mapActions, mapGetters } from "vuex";

@Component({
  store: TodoListStore,
  ...mapActions(["updateMode", "clearTasks"]),
  ...mapGetters(["mode"])
})
export default class ViewControl extends Vue {
  @Action("updateMode")
  private updateMode!: any;

  @Action("clearTasks")
  private clearTasks!: any;

  @Getter("mode")
  mode!: Mode;

  handleUpdateMode(mode: Mode) {
    this.updateMode(mode);
  }

  handleClearTasks() {
    this.clearTasks();
  }
}
</script>
