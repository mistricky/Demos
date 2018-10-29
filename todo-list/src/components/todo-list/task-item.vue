<template>
  <div>
    <span>{{name}}</span>
    <button :disabled="done" @click="handleDoneClick">done!</button>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import { Action } from "vuex-class";
import { TodoListStore } from "@/stores";
import { mapActions } from "vuex";

@Component({
  store: TodoListStore,
  ...mapActions(["doneTask"])
})
export default class TaskItem extends Vue {
  @Prop()
  name!: string;
  @Prop()
  done!: boolean;
  @Prop()
  id!: string;
  @Action("doneTask")
  private doneTask!: any;

  handleDoneClick() {
    this.doneTask(this.id);
  }
}
</script>
