import React, { useState } from "react";
import "./App.css";
import { useMutation } from "@tanstack/react-query";

import axios from "axios";

function PUTMethod() {
  const [updatedPost, setUpdatedPost] = useState({
    id: "",
    userId: "",
    title: "",
    body: "",
  });
 
  const updatePostMutation = useMutation({
    mutationFn: (data) =>
      axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data),
    onSuccess: (response) =>
      console.log("success in put mutation", response.data),
  });

  const handleChange = ({ name, value }) => {
    setUpdatedPost((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>React Query - PUT Method Example</h1>

      <div>
        {/* <h2>Update Post</h2> */}
        <div>
          <input
            value={updatedPost.id}
            onChange={(e) => handleChange(e.target)}
            name="id"
          />
          <br />
          <br />
          <input
            value={updatedPost.userId}
            onChange={(e) => handleChange(e.target)}
            name="userId"
          />
          <br />
          <br />
          <input
            value={updatedPost.title}
            onChange={(e) => handleChange(e.target)}
            name="title"
          />
          <br />
          <br />
          <input
            value={updatedPost.body}
            onChange={(e) => handleChange(e.target)}
            name="body"
          />
          <br />
          <br />
          <button
            onClick={() => updatePostMutation.mutate(updatedPost)}
            disabled={updatePostMutation.isLoading}
          >
            {updatePostMutation.isLoading ? "Updating..." : "Update Post"}
          </button>
        </div>

        {updatePostMutation.isLoading && <p>Updating post...</p>}
        {updatePostMutation.isError && (
          <p style={{ color: "red" }}>Error updating post!</p>
        )}
        {updatePostMutation.isSuccess && (
          <div>
            <p>Post updated successfully!</p>
            <p>Updated Title: {updatePostMutation.data.data.title}</p>
            <p>Updated Body: {updatePostMutation.data.data.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PUTMethod;

// import React, { useState } from "react";
// import "./App.css";
// import { useMutation } from "@tanstack/react-query";

// import axios from "axios";
// //import PUTMethod from './PUTMethod';

// function PUTMethod() {
//   const [updatedPost, setUpdatedPost] = useState({
//     userId: "",
//     title: "",
//     body: "",
//   });

//   //   const updatePostMutation = useMutation({
//   //     mutationKey: ['updatePost'],
//   //     mutationFn: async (newPost) => {
//   //       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${newPost.id}`, {
//   //         method: 'PUT',
//   //         body: JSON.stringify(newPost),
//   //         headers: {
//   //           'Content-Type': 'application/json; charset=UTF-8',
//   //         },
//   //       });
//   //       if (!response.ok) {
//   //         throw new Error("error updating data");
//   //       }
//   //       return response.json();
//   //     },
//   //   });

//   const updatePostMutation = useMutation({
//     mutationFn: (data) =>
//       axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data),
//     onSuccess: (response) => console.log("success in put mutation", response.data),
//   });

//   const handleChange = ({ name, value }) => {
//   //  console.log("inside handle change", name, value);
//     setUpdatedPost((prev) => ({ ...prev, [name]: value}));
//   };

//   //console.log("updated data", updatePostMutation);

//   return (
//     <div>
//       <h1>React Query - PUT Method Example</h1>

//       <div>
//         <h2>Update Post</h2>
//         <div>
//           <input
//             value={updatedPost.userId}
//             onChange={(e) => handleChange(e.target)}
//             name="userId"
//           />
//           <br></br>
//           <br></br>
//           <input
//             value={updatedPost.title}
//             onChange={(e) => handleChange(e.target)}
//             name="title"
//           />
//           <br></br>
//           <br></br>
//           <input
//             value={updatedPost.body}
//             onChange={(e) => handleChange(e.target)}
//             name="body"
//           />
//           <br></br>
//           <br></br>
//           <button
//             onClick={() => updatePostMutation.mutate(updatedPost)}
//             disabled={updatePostMutation.isLoading}
//           >
//             {updatePostMutation.isLoading ? "Updating..." : "Update Post"}
//           </button>
//         </div>

//         {updatePostMutation.isLoading && <p>Updating post...</p>}
//         {updatePostMutation.isError && (
//           <p style={{ color: "red" }}>Error updating post!</p>
//         )}
//         {updatePostMutation.isSuccess && (
//           <div>
//             <p>Post updated successfully!</p>
//             <p>Updated Title: {updatePostMutation.data.data.title}</p>
//             <p>Updated Body: {updatePostMutation.data.data.body}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PUTMethod;

//https://dummyapi.io/data/v1/user?page=${pageNum}&limit=10