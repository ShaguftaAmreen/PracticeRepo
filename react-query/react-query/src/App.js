import React from 'react';

import './App.css';
import { useQuery, useMutation } from '@tanstack/react-query';

function App() {
  const userData = useQuery({
    queryKey: ['users'],
    queryFn: () => {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json());
    },
    enabled: false,
  });

  const mutatePost = useMutation({
    mutationKey: ['posts'],
    mutationFn: (newPost) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json());
    },
  });

console.log("hello world",mutatePost.data)

const handleClick=()=>{
  mutatePost.mutate({ title: 'First Post', body: 'First Post Body', userId: 1 })
}

  return (
    <div>
      <div>
        <button onClick={() => userData.refetch()}>Get Users</button>
        <div>
          {userData.isFetching && <div>Fetching user data...</div>}
          {userData.isError && <div>{`Error getting data!!!`}</div>}
          {userData.data && userData.data.length > 0 && userData.data.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      </div>
      <hr />
      <div>
        <button onClick={handleClick}>
          Add New Post
        </button>
        <div>
          {mutatePost.isLoading && <div>Adding new post...</div>}
          {mutatePost.isError && <div>{`Error adding new post!!!`}</div>}
          {mutatePost.data && (
            <div>{`Success adding new post with title: '${mutatePost.data.body}'`}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;



//() => mutatePost.mutate({ title: 'First Post', body: 'First Post Body', userId: 1 })





//************************************************
// import React from 'react';
// //import logo from './logo.svg';
// import './App.css';
// import { useQuery } from '@tanstack/react-query';

// function App() {
//   const userData = useQuery({
//     queryKey: ['users'], 
//     queryFn: () => {
//       return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
//     },
//     enabled: false, 
//   });

//   return (
//     <div className="App">
//       <div>
//         <button onClick={() => userData.refetch()}>Get Users</button>
//         <div>
//           {userData.isFetching && (
//             <div>Fetching user data...</div>
//           )}
//           {userData.isError && (
//             <div>{`Error getting data!!!`}</div>
//           )}
//           {userData.data && userData.data.length > 0 && userData.data.map((user) => (
//             <div key={user.id}>{user.name}</div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
