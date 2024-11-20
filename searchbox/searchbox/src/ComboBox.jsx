 import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SearchBox from './SearchBox';

export default function ComboBox() {
  const { data } = useQuery({
    queryKey: ['allProducts'],
    queryFn: async () => {
      const response = await axios.get('https://dummyjson.com/products/category-list');
      
      return response.data;
    },
  });

  console.log("1",data)
   
  return (
    <div>
      {/* <input placeholder='search something here'/> */}
      <SearchBox data1={data ?? []} />
    </div>
  );
}


// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// // import SearchBox from "./SearchBox";

// export default function ComboBox() {
//   const { data } = useQuery({
//     queryKey: ["allProducts"],
//     queryFn: async () => {
//       const response = await axios.get(
//         "https://dummyjson.com/products/category-list"
//       );
//       return response.data;
//     },
//   });

//   return (
//     <div>
//       {/* <SearchBox data1={data} /> */}
//       <Autocomplete
//         disablePortal
//         options={data ? data.map((ele) => ele) : []}
//         sx={{ width: 300 }}
//         //   onClick={handleClick}
//         renderInput={(params) => <TextField {...params} label="Category" />}
//       />
//     </div>
//   );
// }

// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// //import top100Films from './top100Films';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// export default function ComboBox() {

//     const {data } = useQuery({
//         queryKey: ['allProducts'],
//         queryFn: async () => {
//           const response = await axios.get(
//             'https://dummyjson.com/products/category-list'
//           );

//           return response.data;
//         },
//       });

//   return (
//     <Autocomplete
//       disablePortal
//       options={data.map((ele)=>(ele))}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="Movie" />}
//     />
//   );
// }
