import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchTodos = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return data;
};

const deleteTodo = async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return id;
};

const TodoList = () => {
  const queryClient = useQueryClient();
  const { data: todos, isLoading, isError, error } = useQuery('todos', fetchTodos);
  const mutation = useMutation(deleteTodo, {
    onSuccess: (id) => {
      // Invalidate and refetch the 'todos' query to update the list after deleting a todo
      queryClient.setQueryData('todos', (oldData) => oldData.filter((todo) => todo.id !== id));
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.title}
          <button style={{marginRigth:"5px"}} onClick={() => mutation.mutate(todo.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default TodoList;


















