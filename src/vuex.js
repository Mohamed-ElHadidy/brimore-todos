import { createStore } from 'vuex';
import * as api from './core/api';

export default createStore({
  state: {
    appTitle: 'To Do App',
    todos: [],
  },
  mutations: {
    mutateAllTodos: (state, AllTodos) => {
      state.todos = AllTodos;
    },
    mutateEditingTodo: (state, todo) => {
      state.todos[todo.id - 1] = todo;
    },
    mutateaddingTodo: (state, todo) => {
      state.todos.push(todo);
    },
  },
  actions: {
    async getAllTodosAction({ commit }) {
      commit('mutateAllTodos', await api.getAll());
    },
    async editTodoAction({ commit }, obj) {
      commit('mutateEditingTodo', await api.editTodo(obj));
    },
    async addTodoAction({ commit }, obj) {
      commit('mutateaddingTodo', await api.addTodo(obj));
    },
  },
  modules: {},
});
