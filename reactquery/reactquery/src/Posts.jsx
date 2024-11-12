import React from 'react';
import { useQuery } from '@tanstack/react-query';

function Posts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'], 
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
    staleTime: 60000, 
    refetchOnWindowFocus: false, 
  });

  console.log(data)

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }
 
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.email}</li> 
        ))}
      </ul>
    </div>
  );
}


export default Posts;

//   const {mutate,isError:isPostError,isPending,error:PostError}=useMutation({
//     mutationFn :(post)=> fetch("http://localhost:3000/posts",{
//         method:"POST",
//         headers:{
//             "Content-Typr":"application/json",
//         },
//         body:JSON.stringify(post)
//     })
//     .then((res)=>res.json())
//     .then((data)=>data),
//  })
