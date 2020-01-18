<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="panel">
          <h2>To-Do</h2>
          <div class="list" id="list-todo">
            <Task
              v-for="task in tasks.todo"
              v-bind:key="task.id"
              v-bind:title="task.title"
              v-bind:id="task.id"
            />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="panel">
          <h2>Progress</h2>
          <div class="list" id="list-progress">
            <Task
              v-for="task in tasks.progress"
              v-bind:key="task.id"
              v-bind:title="task.title"
              v-bind:id="task.id"
            />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="panel">
          <h2>Done</h2>
          <div class="list" id="list-done">
            <Task
              v-for="task in tasks.done"
              v-bind:key="task.id"
              v-bind:title="task.title"
              v-bind:id="task.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Task from './Task'

export default {
  name: 'TodoList',
  components: {
    Task,
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
}

.panel h2 {
  font-size: 1.2em;
  margin-bottom: 1em;
  text-align: center;
}

.task {
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 2px;
  box-shadow: 1px 1px 2px 0px rgba(9, 30, 66, 0.25);
}
</style>
