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
      movedTask: {},
      targetList: '',
    }
  },
  methods: {
    handleTaskDragStart(data) {
      this.movedTask = data
    },
    handleTaskDragEnd() {
      this.movedTask = {}
    },
    handleListDragOver(data) {
      this.targetList = data.targetList
    },
    handleListDropped(data) {
      this.targetList = ''

      // Prevent move on same list
      if (data.targetList == this.movedTask.listId) {
        return
      }

      // Add moved element to targetList
      this.tasks[data.targetList].push({
        title: this.movedTask.title,
        id: this.movedTask.id,
      })

      // Remove removed element from sourceList
      this.tasks[this.movedTask.listId].splice(this.movedTask.index, 1)
    },
  },
  created() {
    this.$bus.$on('task-drag-start', this.handleTaskDragStart)
    this.$bus.$on('task-drag-end', this.handleTaskDragEnd)

    this.$bus.$on('list-drag-over', this.handleListDragOver)
    this.$bus.$on('list-dropped', this.handleListDropped)
  },
}
</script>

<style scoped></style>
