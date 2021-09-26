import axios from 'axios';

const getAll = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    // eslint-disable-next-line no-unreachable
    console.log(res);
    return res.data;
  } catch (error) {
    throw Error('faild to get data');
  }
};
const editTodo = async (todo) => {
  try {
    const res = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      completed: todo.completed,
      id: todo.id,
      title: todo.title,
      userId: todo.userId,
    });
    // eslint-disable-next-line no-unreachable
    console.log(res);
    return res.data;
  } catch (error) {
    throw Error('faild to edit data');
  }
};
const addTodo = async (todo) => {
  try {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos/', {
      completed: todo.completed,
      id: todo.id,
      title: todo.title,
      userId: todo.userId,
    });
    // eslint-disable-next-line no-unreachable
    console.log(res);
    return res.data;
  } catch (error) {
    throw Error('faild to add todo');
  }
};

const deleteTodo = async (id) => {
  try {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    // eslint-disable-next-line no-unreachable
    console.log(res);
    return id;
  } catch (error) {
    throw Error('faild to delete todo');
  }
};

export {
  getAll, editTodo, addTodo, deleteTodo,
};
