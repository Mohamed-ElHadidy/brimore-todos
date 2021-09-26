<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{ title }}</h1>
  <AddTodoForm />
  <todos />
</template>
<script>
import { mapState } from 'vuex';
import AddTodoForm from './components/AddTodoForm.vue';
import Todos from './components/Todos.vue';

export default {
  name: 'App',
  components: {
    AddTodoForm,
    Todos,
  },
  methods: {
    ...mapState(['appTitle']),
  },
  computed: {
    title() {
      return this.appTitle();
    },
  },
};
</script>

<style lang="scss">
* {
  color: #dee0e2;
  background-color: #2c3e50;

}
.modal-container {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dee0e2;
  background-color: #2c3e50;
  margin-top: 60px;
}
</style>
