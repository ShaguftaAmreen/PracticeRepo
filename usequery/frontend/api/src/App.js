import './App.css';
//import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { useState,useEffect } from 'react';
function App() {
 const {data,isLoading,error}=useFunction("api/products")


  if (isLoading) {     
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <h1>API Handling in React JS with custom hook</h1>
      <h2>Number of products are: {data.length}</h2>
      {data.map((ele) => (
        <div key={ele.id}>
          <p>{ele.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// // import POSTMethod from './POSTMethod';
// import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// // import Pagination from './Pagination';
// // import PUTMethod from './PUTMethod';
// //import Example from './Example';

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );

// const queryClient = new QueryClient();

// root.render(
//   <QueryClientProvider client={queryClient}>
//     <App /> 
//     {/* <POSTMethod /> */}
//     {/* <PUTMethod /> */}
    
//     {/* <Example /> */}
//     {/* <Pagination /> */}
//   </QueryClientProvider>
// );














// import './App.css';
// //import { useState, useEffect } from 'react';
// //import axios from 'axios';
// import { useQuery } from "@tanstack/react-query";
// function App() {
  //const [products, setProducts] = useState([]);


export const useFunction=(api)=>{
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading]=useState(false)
  const [error,setError]=useState(false)


  useEffect(() => {
    (async () => {
      try {   
        setIsLoading(true)
        const response = await axios.get(`http://localhost:4000/${api}`);
        
        console.log(response.data)
        setData(response.data);
        setIsLoading(false)
      } catch (error) {
        setError(true)
        setIsLoading(false)
        console.error("Error fetching products:", error);
      }
    })();
  }, [api]);
return {data,isLoading,error}
}
