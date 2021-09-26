<template>
  <form @submit.prevent="addTodo" method="post">
    <label for="input"></label>
    <input type="text" v-model="addTodoValues.title" id="input" placeholder="Add Todo" required>
    <input class="btn" type="submit" value="Add Todo">
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTodoForm',
  data() {
    return {
      addTodoValues: {
        completed: false,
        id: Math.random(),
        title: '',
        userId: Math.random(),
      },
    };
  },
  methods: {
    addTodo() {
      this.addTodoAction(this.addTodoValues);
    },
    ...mapActions(['addTodoAction']),
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
.btn {
  padding: 1rem;
  border: none;
  margin: 0.3rem;
  border-radius: 0.4rem;
  font-weight: bold;
  font-size: 1.5rem;
  background-color: green;
}

#input {
  width: 40rem;
  height: 3.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: honeydew;
  color: black;
  border-radius: 0.5rem;
}
</style>
