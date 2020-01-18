<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="panel">
          <h2>To-Do</h2>
          <div class="list">
            <div class="task" id="item-1">
              Item 1
            </div>
            <div class="task" id="item-2">
              Item 2
            </div>
            <div class="task" id="item-3">
              Item 3
            </div>
            <div class="task" id="item-4">
              Item 4
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="panel">
          <h2>Progress</h2>
          <div class="list"></div>
        </div>
      </div>
      <div class="col">
        <div class="panel">
          <h2>Done</h2>
          <div class="list"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
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
