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
      const idx = state.todos.findIndex((el) => el.id === todo.id);
      state.todos[idx] = todo;
    },
    mutateaddingTodo: (state, todo) => {
      state.todos = [todo, ...state.todos];
    },
    mutatedeletingTodo: (state, deltodo) => {
      state.todos = state.todos.filter((todo) => todo.id !== deltodo);
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
    async deleteTodoAction({ commit }, id) {
      commit('mutatedeletingTodo', await api.deleteTodo(id));
    },
  },
  modules: {},
});
