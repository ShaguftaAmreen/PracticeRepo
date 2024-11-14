import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import POSTMethod from './POSTMethod';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    {/* <App /> */}
    <POSTMethod />
  </QueryClientProvider>
);





