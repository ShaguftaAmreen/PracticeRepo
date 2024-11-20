import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PostsPagination = () => {
  const fetchPosts = async (pageNum) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          params: {
            _start: (pageNum - 1)*10,
            _limit: 10,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Error fetching posts: " + error.message);
    }
  };

  const [pageNum, setPageNum] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNum],
    queryFn: () => fetchPosts(pageNum),
    keepPreviousData: true,
    onError: (error) => {
      console.log("Error fetching posts:", error);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  if (!data || data.length === 0) return <div>No posts available.</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            {/* <p>{post.body}</p> */}
          </li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => setPageNum((prev) => Math.max(prev - 1, 1))}
          disabled={pageNum === 1}
        >
          Previous
        </button>

        <span>Page {pageNum}</span>

        <button
          onClick={() => setPageNum((prev) => prev + 1)}
          disabled={data.length < 10}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsPagination;
