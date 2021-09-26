<template>
  <div class="todo-block">
    <h4>{{ Todo.title }}</h4>
    <p>{{ Todo.id }}</p>
    <button
      class="btn red" @click="deleteTodo(Todo.id)">
      Delete
    </button>
    <button class="btn green" @click="showModalClick()">Edit</button>
    <edit-modal v-show="showModal" :Todo="Todo" @hide="showModal = !showModal"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import EditModal from './EditModal.vue';

export default {
  name: 'SingleTodo',
  components: {
    EditModal,
  },
  props: ['Todo'],
  emits: ['hide'],
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    showModalClick() {
      this.showModal = !this.showModal;
    },
    deleteTodo(id) {
      this.$store.dispatch('deleteTodoAction', id);
    },
    ...mapActions(['mutateeditTodos']),
  },
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
