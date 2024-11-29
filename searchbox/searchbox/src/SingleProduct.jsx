import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['singleProduct', id],
    queryFn: async () => {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return response.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <div style={{width:"600px",height:"400px", }}>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <img style={{width:"300px",height:"200px"}} src={data?.images[0]} alt="Product" />
    </div>
    </div>
   );
};

export default SingleProduct;












