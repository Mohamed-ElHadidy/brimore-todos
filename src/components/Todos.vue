<template>
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
import { mapActions, mapState } from 'vuex';
import SingleTodo from './SingleTodo.vue';

export default {
  name: 'Todos',
  components: {
    SingleTodo,
  },
  props: ['Todo'],
  methods: {
    ...mapActions(['getAllTodosAction']),
    ...mapState(['todos']),
  },
  created() {
    this.getAllTodosAction();
  },
  computed: {
    // getting all todos data from state
    AllTodos() {
      return this.todos();
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
