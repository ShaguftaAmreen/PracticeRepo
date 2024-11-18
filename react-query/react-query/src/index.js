import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
// import POSTMethod from './POSTMethod';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Pagination from './Pagination';
// import PUTMethod from './PUTMethod';
 import DeletePost from './Delete';
//import Example from './Example';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    {/* <App /> */}
    {/* <POSTMethod /> */}
    <DeletePost />
    {/* <PUTMethod /> */}
    {/* <Example /> */}
    <Pagination />
  </QueryClientProvider>
);





