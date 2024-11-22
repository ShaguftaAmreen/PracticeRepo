import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTodos, createTodo } from './components/api'; // Import the functions from api.js

const App = () => {
  const queryClient = useQueryClient();
  const [newTodo, setNewTodo] = useState('');

  
  const { data: todos, isLoading, error } = useQuery(['todos'], fetchTodos);

  
  const mutation = useMutation(createTodo, {
    onSuccess: (newTodo) => {
      
      queryClient.setQueryData(['todos'], (oldData) => {
        // Check if oldData is an array, if not return a new array with the new todo
        if (Array.isArray(oldData)) {
          return [newTodo, ...oldData];  
        }
        return [newTodo]; // If oldData is not an array, just return an array with the new todo
      });
    },
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title: newTodo, completed: false });
    setNewTodo('');
  };

  if (isLoading) return <div>Loading TODOs...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>TODO List</h1>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? '✔️' : '❌'}
          </li>
        ))}
      </ul>

      <h2>Add New TODO</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New TODO"
          required
        />
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Adding...' : 'Add TODO'}
        </button>
      </form>

      {/* Optional Error/Success Messages */}
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
      {mutation.isSuccess && <div>New TODO added successfully!</div>}
    </div>
  );
};

export default App;




