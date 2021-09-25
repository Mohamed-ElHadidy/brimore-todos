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
  },
  actions: {
    async getAllTodosAction({ commit }) {
      commit('mutateAllTodos', await api.getAll());
    },
  },
  modules: {},
});
