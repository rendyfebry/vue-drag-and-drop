<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Panel title="To-Do" id="todo" :tasks="tasks.todo" />
      </div>
      <div class="col">
        <div class="panel">
          <Panel title="Progress" id="progress" :tasks="tasks.progress" />
        </div>
      </div>
      <div class="col">
        <div class="panel">
          <Panel title="Done" id="done" :tasks="tasks.done" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from './Panel'

export default {
  name: 'TodoList',
  components: {
    Panel,
  },
  data: function() {
    return {
      tasks: {
        todo: [
          {
            title: 'Item 1',
            id: 'item-1',
          },
          {
            title: 'Item 2',
            id: 'item-2',
          },
          {
            title: 'Item 3',
            id: 'item-3',
          },
          {
            title: 'Item 4',
            id: 'item-4',
          },
        ],
        progress: [],
        done: [],
      },
    }
  },
}
</script>

<style scoped>
.panel {
  background-color: #f4f5f7;
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
</style>
