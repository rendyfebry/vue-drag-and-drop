<template>
  <div
    class="list"
    :id="`${id}-list`"
    droppable="true"
    v-on:dragover="handleDragOver"
    v-on:drop="handleDrop"
  >
    <Task v-for="task in tasks" :key="task.id" :id="task.id" :title="task.title" />
  </div>
</template>

<script>
import Task from './Task'

export default {
  name: 'List',
  components: {
    Task,
  },
  props: ['id', 'tasks'],
  methods: {
    handleDragOver(e) {
      e.preventDefault()
    },
    handleDrop(e) {
      e.preventDefault()
      console.log('drop')
      console.log(e.target)
    },
  },
}
</script>

<style scoped>
.list {
  flex: 1;
}
</style>
