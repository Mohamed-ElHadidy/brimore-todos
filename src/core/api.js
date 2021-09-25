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

// eslint-disable-next-line import/prefer-default-export
export { getAll };
