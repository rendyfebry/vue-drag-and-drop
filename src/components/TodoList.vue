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
      movedTaskID: '',
      sourceList: '',
    }
  },
  methods: {
    handleDragStart(data) {
      // Save taskID & sourceList
      this.movedTaskID = data.taskID
      this.sourceList = data.sourceList
    },
    handleDrop(data) {
      // Prevent move on same list
      if (data.targetList == this.sourceList) {
        return
      }

      // Add moved element to targetList
      const movedElements = this.tasks[this.sourceList].filter(e => e.id == this.movedTaskID)
      if (movedElements.length) {
        this.tasks[data.targetList].push(movedElements[0])
      }

      // Remove removed element from sourceList
      const remainingElements = this.tasks[this.sourceList].filter(e => e.id != this.movedTaskID)
      this.tasks[this.sourceList] = remainingElements
    },
  },
  created() {
    this.$bus.$on('drag-start', this.handleDragStart)
    this.$bus.$on('dropped', this.handleDrop)
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
