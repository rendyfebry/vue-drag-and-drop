<template>
  <div
    class="task"
    :id="id"
    draggable="true"
    v-on:dragstart="handleDragStart"
    v-on:dragend="handleDragEnd"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['title', 'id'],
  methods: {
    handleDragStart(e) {
      console.log('drag start', e)
    },
    handleDragEnd(e) {
      console.log('drag end', e)
    },
  },
}
</script>
