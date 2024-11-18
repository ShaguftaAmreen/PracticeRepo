import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 900); 

    return () => {
    clearTimeout(handler);
    };
  }, [search]);

  
  const fetchProducts = async () => {
    const response = await axios.get(`http://localhost:4000/api/products?search=${debouncedSearch}`);
    return response.data;
  };

  
  const { data=[], isLoading, error } = useQuery({
    queryKey: ["products", debouncedSearch],
    queryFn: fetchProducts,
    keepPreviousData: true,
    enabled: !!debouncedSearch, 
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <h1>API Handling in React JS with React Query</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {data.map((ele) => (
        <div key={ele.id}>
          {ele.name.includes(debouncedSearch) ? <p>{ele.name}</p> : ""}
        </div>
      ))}
    </div>
  );
}

export default App;





//************************************************************************/
// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [search, setSearch] = useState("");

  
//   const fetchProducts = async () => {
//     const response = await axios.get(`http://localhost:4000/api/products?search=${search}`);
//     return response.data;
//   };

  
//   const { data = [], isLoading, error } = useQuery({
//     queryKey: ["products", search],
//     queryFn: fetchProducts,
//     keepPreviousData: true,
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="App">
//       <h1>API Handling in React JS with React Query</h1>
//       <input
//         type="text"
//         placeholder="Search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {data.map((ele) => (
//         <div key={ele.id}>
//           {ele.name.includes(search) ? <p>{ele.name}</p> : ""}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


//****************************************************************************************** */

// import { useState } from "react";
// import "./App.css";
// import useFunction from "./useFunction";

// function App() {
//   var [search, setSearch] = useState("");
//   var { data, isLoading, error } = useFunction("api/products", search);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="App">
//       <h1>API Handling in React JS with custom hook</h1>
//       {/* <h2>Number of products are: {data.length}</h2> */}
//       <input
//         type="text"
//         placeholder="Search"
//         value={search}
//         onChange={(e) => {
//           setSearch(e.target.value);
//         }}
//       />
//       {data.map((ele) => (
//         <div key={ele.id}>{ele.name.includes(search )? <p>{ele.name}</p> : ""}</div>
//       ))}
//     </div>
//   );
// }

// export default App;

// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // // import POSTMethod from './POSTMethod';
// // import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// // // import Pagination from './Pagination';
// // // import PUTMethod from './PUTMethod';
// // //import Example from './Example';

// // const root = ReactDOM.createRoot(
// //   document.getElementById('root')
// // );

// // const queryClient = new QueryClient();

// // root.render(
// //   <QueryClientProvider client={queryClient}>
// //     <App />
// //     {/* <POSTMethod /> */}
// //     {/* <PUTMethod /> */}

// //     {/* <Example /> */}
// //     {/* <Pagination /> */}
// //   </QueryClientProvider>
// // );

// // import './App.css';
// // //import { useState, useEffect } from 'react';
// // //import axios from 'axios';
// // import { useQuery } from "@tanstack/react-query";
// // function App() {
// //const [products, setProducts] = useState([]);

// // export const useFunction=(api)=>{
// //   const [data, setData] = useState([]);
// //   const [isLoading,setIsLoading]=useState(false)
// //   const [error,setError]=useState(false)

// //   useEffect(() => {
// //     (async () => {
// //       try {
// //         setIsLoading(true)
// //         const response = await axios.get(`http://localhost:4000/${api}`);

// //         console.log(response.data)
// //         setData(response.data);
// //         setIsLoading(false)
// //       } catch (error) {
// //         setError(true)
// //         setIsLoading(false)
// //         console.error("Error fetching products:", error);
// //       }
// //     })();
// //   }, [api]);
// // return {data,isLoading,error}
// // }
