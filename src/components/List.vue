<template>
  <div
    class="list"
    :id="`list-${id}`"
    droppable="true"
    v-on:dragover="handleDragOver"
    v-on:drop="handleDrop"
  >
    <Task v-for="task in tasks" :key="task.id" :listId="id" :id="task.id" :title="task.title" />
  </div>
</template>

<script>
import Task from './Task'

export default {
  name: 'List',
  components: {
    Task,
  },
  props: ['id', 'tasks', 'active'],
  methods: {
    handleDragOver(e) {
      e.preventDefault()
      this.$bus.$emit('drag-over', {
        targetList: this.id,
      })
    },
    handleDrop(e) {
      e.preventDefault()
      this.$bus.$emit('dropped', {
        targetList: this.id,
      })
    },
  },
}
</script>

<style scoped>
.list {
  flex: 1;
}
</style>
