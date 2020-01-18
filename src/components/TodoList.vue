<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Panel title="To-Do" id="todo" :tasks="tasks.todo" />
      </div>
      <div class="col">
        <Panel title="Progress" id="progress" :tasks="tasks.progress" />
      </div>
      <div class="col">
        <Panel title="Done" id="done" :tasks="tasks.done" />
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
            id: 'cuaygmld',
          },
          {
            title: 'Item 2',
            id: 'acdwkhkg',
          },
          {
            title: 'Item 3',
            id: 'tgazicxp',
          },
          {
            title: 'Item 4',
            id: 'mzfaarrc',
          },
        ],
        progress: [],
        done: [],
      },
    }
  },
  methods: {
    handleDragStart(list, id) {
      console.log(list, id)
    },
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
