<template>
  <h3>todo list</h3>
  <SingleTodo />
</template>

<script>
import SingleTodo from './SingleTodo.vue';

export default {
  name: 'Todos',
  components: {
    SingleTodo,
  },
  props: {
  },
};
</script>

<style lang="scss" scoped>

</style>
