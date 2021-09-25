<template>
  <div class="todo-block">
    <h4>{{ Todo.title }}</h4>
    <p>{{ Todo.id }}</p>
    <button class="btn red">Delete</button>
    <button class="btn green">Edit</button>
  </div>
</template>

<script>
export default {
  name: 'SingleTodo',
  props: ['Todo'],
};
</script>

<style lang="scss" scoped>
.todo-block {
  padding: 0.8rem;
  margin: 0.5rem;
  border: 1px solid #3a5168;
  min-width: 25%;
  border-radius: 1rem;
}
.btn {
  padding: 0.4rem;
  border: none;
  margin: 0.3rem;
  border-radius: 0.4rem;
  font-weight: bold;
}
.red {
  background-color: red;
}

.green {
  background-color: green;
}
</style>
