<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Panel title="To-Do" id="todo" :tasks="tasks.todo" :target="targetList == 'todo'" />
      </div>
      <div class="col">
        <Panel
          title="Progress"
          id="progress"
          :tasks="tasks.progress"
          :target="targetList == 'progress'"
        />
      </div>
      <div class="col">
        <Panel title="Done" id="done" :tasks="tasks.done" :target="targetList == 'done'" />
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
      targetList: '',
    }
  },
  methods: {
    handleDragStart(data) {
      // Save taskID & sourceList
      this.movedTaskID = data.taskID
      this.sourceList = data.sourceList
    },
    handleDragOver(data) {
      this.targetList = data.targetList
    },
    handleDrop(data) {
      // Prevent move on same list
      if (data.targetList == this.sourceList) {
        this.movedTaskID = ''
        this.sourceList = ''
        this.targetList = ''
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

      this.movedTaskID = ''
      this.sourceList = ''
      this.targetList = ''
    },
  },
  created() {
    this.$bus.$on('drag-start', this.handleDragStart)
    this.$bus.$on('drag-over', this.handleDragOver)
    this.$bus.$on('dropped', this.handleDrop)
  },
}
</script>

<style scoped></style>
