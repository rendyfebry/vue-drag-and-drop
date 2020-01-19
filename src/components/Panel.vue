<template>
  <div :class="target ? 'panel target' : 'panel'" :id="`${id}-panel`">
    <div class="title">
      <h2>{{ title }}</h2>
    </div>
    <List :id="id" :tasks="tasks" />
  </div>
</template>

<script>
import List from './List'

export default {
  name: 'Panel',
  components: {
    List,
  },
  props: ['id', 'title', 'target', 'tasks'],
}
</script>

<style scoped>
.panel {
  background-color: #f4f5f7;
  border: 2px solid #f4f5f7;
  border-radius: 0.25em;
  padding: 1em;
  min-height: 500px;
  display: flex;
  flex-direction: column;
}

.panel h2 {
  font-size: 1.2em;
  margin-bottom: 1em;
  text-align: center;
}

.target {
  background-color: #ecf2f9;
  border: 2px dashed #0a479b;
}
</style>
