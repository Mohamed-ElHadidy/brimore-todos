<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{ title }}</h1>
  <AddTodoForm />
  <todos />
</template>
<script>
import AddTodoForm from './components/AddTodoForm.vue';
import Todos from './components/Todos.vue';

export default {
  name: 'App',
  components: {
    AddTodoForm,
    Todos,
  },
  computed: {
    title() {
      return this.$store.state.appTitle;
    },
  },
};
</script>

<style lang="scss">
* {
  color: #dee0e2;
  background-color: #2c3e50;

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
