import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <div>
        <h1>To-Do List with React Query</h1>
        <TodoForm />
        <TodoList />
        </div>
    </QueryClientProvider>
  );
};

export default App;
