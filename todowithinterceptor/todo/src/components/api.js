import axiosInstance from './axiosInstance';

export const fetchTodos = async () => {
  return await axiosInstance.get('/todos');
};


export const createTodo = async (todo) => {
  return await axiosInstance.post('/todos', todo); 
};
