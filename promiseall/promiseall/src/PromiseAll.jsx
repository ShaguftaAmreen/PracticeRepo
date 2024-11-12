import React, { useEffect, useState } from "react";
import axios from "axios";

const PromiseAll = () => {
  const [data, setData] = useState([]);

  const [getData, setGetData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const promise1 = axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const promise2 = axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const [data1, data2] = await Promise.all([promise1, promise2]);

        setData(data1.data);
        setGetData(data2.data);
      } catch (error) {
        console.error(
          `Error fetching data`,
          error
        );
      }
    }
    fetchData();
  }, []);

  console.log(data);
  console.log(getData);

  return (
    <div>
      {data.map((ele) => (
        <span key={ele.id}>{ele.name} &nbsp; &nbsp;</span>
      ))}
      <br />
      <h3>
        {getData.map((ele) => (
          <span key={ele.id}>{ele.id} &nbsp; &nbsp;</span>
        ))}
      </h3>
    </div>
  );
};

export default PromiseAll;

//   useEffect(() => {
//     const promise1 = fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "GET",
//     });
//     const promise2 = fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "GET",
//     });
//     Promise.all([promise1, promise2])
//       .then((res) => {
//         console.log("promise all response", res);
//         for (let i = 0; i < res.length; i++) {
//           res[i].json().then((data) => {
//             setData(data);
//             setGetData(data);
//           });
//         }
// //   console.log(res)
//      setData(res[0].data);
//      setGetData(res[1].data);
//       })
//       .catch((err) => {
//         console.log("Error");
//       });
//   }, []);

//Leanne Graham    Ervin Howell    Clementine Bauch    Patricia Lebsack
//Chelsey Dietrich    Mrs. Dennis Schulist    Kurtis Weissnat
//Nicholas Runolfsdottir V    Glenna Reichert    Clementina DuBuque
