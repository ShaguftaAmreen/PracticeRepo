import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const addTodo = async (newTodo) => {
  const { data } = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
  return data;
};

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: (newTodo) => {
      // After adding a new task, invalidate and refetch the 'todos' query to update the list
      queryClient.setQueryData('todos', (oldData) => [newTodo, ...oldData]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      mutation.mutate({
        title,
        completed: false,
      });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
