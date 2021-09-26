import axios from 'axios';

// fetch all todos
const getAll = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return res.data;
  } catch (error) {
    throw Error('faild to get data');
  }
};
// send the edited todo
const editTodo = async (todo) => {
  try {
    const res = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      completed: todo.completed,
      id: todo.id,
      title: todo.title,
      userId: todo.userId,
    });
    return res.data;
  } catch (error) {
    throw Error('faild to edit data');
  }
};
// add new todo
const addTodo = async (todo) => {
  try {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos/', {
      completed: todo.completed,
      id: todo.id,
      title: todo.title,
      userId: todo.userId,
    });
    return res.data;
  } catch (error) {
    throw Error('faild to add todo');
  }
};
// delete a todo
const deleteTodo = async (id) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return id;
  } catch (error) {
    throw Error('faild to delete todo');
  }
};

export {
  getAll, editTodo, addTodo, deleteTodo,
};
