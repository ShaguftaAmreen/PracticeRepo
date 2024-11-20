import './App.css';
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import useDebounce from './useDebounce';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["users"],  //  https://dummyjson.com/products/search?q=${debouncedSearch}
    queryFn: async () => {
      const response = await axios.get(`https://dummyjson.com/products/search?q=phone`);
      return response.data; 
    }
    });

  console.log(data)

  const filteredData = data?.products?.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    
    <div className="App">
      <input value={search} onChange={(e)=>{setSearch(e.target.value)}}
       type='search' placeholder='Search here' style={{padding:"20px",width:"100%"}}/>

      {
        filteredData?.map((ele)=>(
          <div key={ele.id}>
            {/* <h1>{ele.id}</h1> */}
            <h4>{ele.title}</h4>
            <img src={`${ele.images[0]}`} style={{width:"200px",height:"200px"}} alt='phone'/>
          </div>
        ))
      }
    </div>
  );
}

export default App;
