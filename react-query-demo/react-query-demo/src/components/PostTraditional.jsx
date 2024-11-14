import React, { useEffect, useState } from "react";
import axios from "axios";

const PostTraditional = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);



  const fetchPosts = async () => {
    try {
      const response = await axios.get("/posts");
      const data=await response.json()

      console.log("*********************")
      console.log(data); // Log to check the data
      setPosts(data);
    } catch (err) {
      console.error(err);  // Log the error for debugging
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // axios.get("/posts")
    // .then((res)=>{
    //     setPosts(res.data)
    // })
    // .catch((err)=>{
    //     setIsError(err)
    // })
     fetchPosts();
  }, []);

  if (isLoading) {
    return <div>Page is loading...</div>;
  }

  if (isError) {
    return <div>An error occurred. Please try again later.</div>;
  }

  return (
    <div>
      {posts.map((ele) => (
        <div key={ele.id}>
          <h1>{ele.id}</h1>
          <h2>{ele.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default PostTraditional;





// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const PostTraditional = () => {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/posts");
//      // console.log("fghjkkl"+response)
//       setPosts(response.data);
//     } catch (err) {
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   if (isLoading) {
//     return <div>Page is loading</div>;
//   }

//   if (isError) {
//     return <div>Error has been occured</div>;
//   }

//   return (
//     <div>
//       {posts.map((ele) => (
//         <div key={ele.id}>
//           <h1>{ele.id}</h1>
//           <h2>{ele.title}</h2>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PostTraditional;
