import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

// Component to fetch and display paginated posts
function Posts() {
  const [page, setPage] = useState(1);  // State for page number

  // Use React Query to fetch posts with pagination
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts', page], // Add 'page' to the query key for pagination
    queryFn: async () => {
      // Fetch posts with limit per page and dynamic page number
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      return response.json();
    },
    staleTime: 60000, // Data is fresh for 1 minute
    refetchOnWindowFocus: false, // Disable refetch on window focus
  });

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle errors if any
  if (error) {
    return <div>Error: {error instanceof Error ? error.message : "Something went wrong"}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>  
        ))}
      </ul>
      <div>
        {/* Pagination Controls */}
        <button onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}>Previous</button>
        <button onClick={() => setPage(prevPage => prevPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Posts;
