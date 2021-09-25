<template>
  <h3>todo list</h3>
  <div class="todos">
    <SingleTodo
    :Todo="todo"
    v-for="todo in AllTodos" :key="todo.id"
    class="todo">
    {{todo.id}}
    </SingleTodo>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SingleTodo from './SingleTodo.vue';

export default {
  name: 'Todos',
  components: {
    SingleTodo,
  },
  props: ['Todo'],
  methods: {
    ...mapActions(['getAllTodosAction']),
  },
  created() {
    this.getAllTodosAction();
  },
  computed: {
    AllTodos() {
      return this.$store.state.todos;
    },
  },
};
</script>

<style lang="scss" scoped>
.todos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
