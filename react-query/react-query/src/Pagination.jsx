import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Pagination = () => {
  const fetchUsers = async (pageNum) => {
    try {
      // const response = await axios.get(`//https://dummyapi.io/data/v1/user?page=${pageNum}&limit=10`, {
      //     headers: {
      //       "app-id": "65fd44d75e980b2387ac22e7",
      //     },
      //     // params: {
      //     //   page: pageNum,
      //     //   limit: 10,
      //     // },
      //   });

      const response = await axios.get(`https://dummyapi.io/data/v1/user`, {
        headers: {
          "app-id": "65fd44d75e980b2387ac22e7",
        },
        params: {
          page: pageNum,
          limit: 10,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error("Error fetching users: " + error.message);
    }
  };
console.log(localStorage.getItem("token"));
localStorage.setItem("x","hello");
console.log(localStorage.getItem("x"))
  const [pageNum, setPageNum] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", pageNum],
    queryFn: () => fetchUsers(pageNum),
    keepPreviousData: true,
    onError: (error) => {
      console.log("Error creating post:", error);
    },
  });
  //sessionStorage.setItem("product","products 2");
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  if (!data || !data.data) return <div>No users available.</div>;
  console.log(data.data);

  return (
    <div>
      <h1>Users</h1>
      <ul className="app">
        {data.data.map((user) => (
          <div key={user.id} style={{ display: "flex" }}>
            <p style={{ marginRight: "10px" }}>
              <span>{user.id}</span>
              <span>{user.title}</span>&nbsp;
              <span>{user.firstName}</span>
              <span>{user.lastName}</span>
            </p>
            <p style={{ marginLeft: "10px" }}>
              <img src={`${user.picture}`} alt="pic" />
            </p>
          </div>
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
          onClick={() => setPageNum((prev) => prev)}
          disabled={data.data.length < 10}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
