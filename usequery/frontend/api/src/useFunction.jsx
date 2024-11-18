import axios from 'axios'
import { useState,useEffect } from 'react';


export const useFunction=(api,search)=>{
    const [data, setData] = useState([]);
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)
  
  
    useEffect(() => {
      (async () => {
        try {   
          setIsLoading(true)
          const response = await axios.get(`http://localhost:4000/${api}?search=${search}`);
          
          console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          setError(true);
          setIsLoading(false);
          console.error("Error fetching products:", error);
        }
      })();
    }, [api,search]);
  return {data,isLoading,error}
  }
  
  export default useFunction;