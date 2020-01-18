<template>
  <div
    class="list"
    :id="`${id}-list`"
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
  props: ['id', 'tasks'],
  methods: {
    generateRandomString() {
      // vaiable regex random string
      const rndString = Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(0, 8)

      return rndString
    },
    handleDragOver(e) {
      e.preventDefault()
    },
    handleDrop(e) {
      e.preventDefault()
      console.log(this.id, this.tasks)
    },
  },
}
</script>

<style scoped>
.list {
  flex: 1;
}
</style>
