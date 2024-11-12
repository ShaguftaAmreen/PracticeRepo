import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Posts from './Posts';
import Posts2 from './Posts2';

const queryClient = new QueryClient();

function App() {
  return (
    
    <QueryClientProvider client={queryClient}>
      <Posts2 />
      <Posts />
    </QueryClientProvider>
  );
}

export default App;
