import React, { useState } from "react";
import "./App.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function DeletePost() {
  const [postId, setPostId] = useState("");

  const deletePostMutation = useMutation({
    mutationFn: (id) =>
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`),
    onSuccess: (response) => {
      console.log("Post deleted successfully", response);
    },

    onError: (error) => console.error("Error deleting post", error),
  });

  const handleChange = (e) => {
    setPostId(e.target.value);
  };

  return (
    <div>
      <h1>React Query - DELETE Method Example</h1>
      <div>
        <input
          value={postId}
          onChange={handleChange}
          placeholder="Enter Post ID to Delete"
        />
        <br />
        <br />
        <button
          onClick={() => deletePostMutation.mutate(postId)}
          disabled={deletePostMutation.isLoading}
        >
          {deletePostMutation.isLoading ? "Deleting..." : "Delete Post"}
        </button>
      </div>

      {deletePostMutation.isLoading && <p>Deleting post...</p>}
      {deletePostMutation.isError && (
        <p style={{ color: "red" }}>Error deleting post!</p>
      )}
      {deletePostMutation.isSuccess && <p>Post deleted successfully!</p>}
      {/* <h3>{data.id}</h3> */}
    </div>
  );
}

export default DeletePost;
