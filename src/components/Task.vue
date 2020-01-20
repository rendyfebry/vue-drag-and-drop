<template>
  <div
    class="task"
    :id="`task-${id}`"
    draggable="true"
    v-on:dragstart="handleDragStart"
    v-on:dragover="handleDragOver"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['listId', 'id', 'title', 'index'],
  methods: {
    handleDragStart() {
      this.$bus.$emit('drag-start', {
        id: this.id,
        title: this.title,
        listId: this.listId,
        index: this.index
      })
    },
    handleDragOver(e) {
      e.preventDefault()
    },
  },
}
</script>

<style scoped>
.task {
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 2px;
  box-shadow: 1px 1px 2px 0px rgba(9, 30, 66, 0.25);
}
</style>
