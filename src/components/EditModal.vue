<template>
  <div class="modal-container">
    <div class="modal-content">
      <textarea v-model="editedTodo.title"></textarea>
      <p>{{ Todo }}</p>
      <button class="btn red" @click="hide()">Cancel</button>
      <button class="btn green" @click="saveMe()">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditModal',
  props: ['Todo'],
  emits: ['hide'],
  data() {
    return {
      editedTodo: {
        completed: this.Todo.completed,
        id: this.Todo.id,
        title: this.Todo.title,
        userId: this.Todo.userId,
      },
    };
  },
  methods: {
    saveMe() {
      this.$store.dispatch('editTodoAction', this.editedTodo);
      console.log(this.editedTodo);
      this.hide();
    },
    hide() {
      this.$emit('hide');
      console.log(this);
    },
  },
};
</script>

<style lang="scss">
.modal-content {
    align-content: center;
    position: fixed;
    top: 20%;
    left: 24%;
    padding: 5rem;
}
textarea {
    padding: 1rem;
    width: 35rem;
    height: 10rem;
    font-size: 1.5rem;
}

.btn {
  padding: 0.4rem;
  border: none;
  margin: 0.3rem;
  border-radius: 0.4rem;
  font-weight: bold;
  font-size: 1rem;
}
.red {
  background-color: red;
}

.green {
  background-color: green;
}
</style>
