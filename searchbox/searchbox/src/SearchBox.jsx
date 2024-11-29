import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import useDebounce from './useDebounce';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchBox = ({ data1 }) => {
  // const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  // const debouncedSearch = useDebounce(search, 500);

  const { isLoading, error, data } = useQuery({
    // queryKey: ['allProducts', debouncedSearch, selectedCategory],
    queryKey: ['allProducts', selectedCategory],
    queryFn: async () => {
      // if (!debouncedSearch && !selectedCategory) return { products: [] };
      if (!selectedCategory) return { products: [] };
      const response = await axios.get(`https://dummyjson.com/products/category/${selectedCategory}`);
      return response.data;
    },
  });

  console.log("ddddddddddddddd",data)
  // Filter products by search term and selected category

  const filteredData = data?.products?.filter((product) => {
    // const matchesSearch = product.title.toLowerCase().includes(debouncedSearch.toLowerCase());
     const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    //  matchesSearch &&
    return matchesCategory;
      //  return product;
  });
  // const filteredData=data

  return (
     <div style={{ width: '100%', padding: '20px' }}>
      
        {/* <input type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        placeholder="Enter your search term here"
        /> */}

      <Autocomplete
        disablePortal
        options={data1?.map((ele)=>(ele)) || []} 
        sx={{ width: 300 }}
        onChange={(event, value) => setSelectedCategory(value || '')}
        renderInput={(params) => <TextField {...params} label="Category" />}
      />

      <div className="card">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {/* <Link to={"/"}>home</Link> */}
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((product) => (
            <Link key={product.id} to={`singleproduct/${product.id}`}>
            {/* // <Link to={"/test"}> */}
            <Card
              key={product.id}
              sx={{ marginBottom: 5 }}
              style={{ width: '300px', margin: '20px' }}
            >
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography color="text.secondary">ID: {product.id}</Typography>
                <img
                  src={product.images[0]}
                  style={{ width: '100px', height: '100px' }}
                  alt="Product"
                />
              </CardContent>
              {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card></Link>
          ))
        ) : (
          !isLoading && <p>No products found.</p>
        )} 
      </div>
    </div>
  );
};

export default SearchBox;



 // `https://dummyjson.com/products/search?q=${debouncedSearch}&category=${selectedCategory}`





// import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import useDebounce from './useDebounce';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

// const SearchBox = ({ data1 }) => {
//   const [search, setSearch] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const debouncedSearch = useDebounce(search, 500);

//   const { isLoading, error, data } = useQuery({
//     queryKey: ['allProducts', debouncedSearch, selectedCategory],
//     queryFn: async () => {
//       if (!debouncedSearch && !selectedCategory) return { products: [] };
//       const response = await axios.get(
//         `https://dummyjson.com/products/search?q=${debouncedSearch}&category=${selectedCategory}`
//       );
//       return response.data;
//     },
//   });

//   const filteredData = data?.products?.filter((product) =>
//     product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
//   );

//   return (
//     <div style={{ width: '100%', padding: '20px' }}>
//       <input
//         type="search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
//         placeholder="Enter your search term here"
//       />

//       <Autocomplete
//         disablePortal
//         options={data1 || []} // Ensure data1 is an array of categories
//         sx={{ width: 300 }}
//         onChange={( value) => setSelectedCategory(value)}
//         renderInput={(params) => <TextField {...params} label="Category" />}
//       />

//       <div className="card">
//         {isLoading && <p>Loading...</p>}
//         {error && <p>Error: {error.message}</p>}
//         {filteredData && filteredData.length > 0 ? (
//           filteredData.map((product) => (
//             <Card
//               key={product.id}
//               sx={{ marginBottom: 5 }}
//               style={{ width: '300px', margin: '20px' }}
//             >
//               <CardContent>
//                 <Typography variant="h6">{product.title}</Typography>
//                 <Typography color="text.secondary">ID: {product.id}</Typography>
//                 <img
//                   src={product.images[0]}
//                   style={{ width: '100px', height: '100px' }}
//                   alt="Product"
//                 />
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           ))
//         ) : (
//           !isLoading && <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchBox;





// import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import useDebounce from './useDebounce';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

// const SearchBox = ({ data1 }) => {
//   const [search, setSearch] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const debouncedSearch = useDebounce(search, 500);

  
//   const { isLoading, error, data } = useQuery({
//     queryKey: ['allProducts', debouncedSearch, selectedCategory],
//     queryFn: async () => {
//       if (!debouncedSearch && !selectedCategory) return { products: [] };
//       const response = await axios.get(
//         `https://dummyjson.com/products?search=${debouncedSearch}&category=${selectedCategory}`
//       );
//       return response.data;
//     },
//   });

  
//   const filteredData = data?.products?.filter((product) =>
//     product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
//   );

//   return (
//     <div style={{ width: '100%', padding: '20px' }}>
//       <input
//         type="search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
//         placeholder="Enter your search term here"
//        />

//       <Autocomplete
//         disablePortal
//         options={data1 ? data1.map((ele) => ele) : []}
//         sx={{ width: 300 }}
//         onChange={(event, value) => setSelectedCategory(value)}
//         renderInput={(params) => <TextField {...params} label="Category" />}
//       />

//       <div className="card">
//         {isLoading && <p>Loading...</p>}
//         {error && <p>Error: {error.message}</p>}
//         {filteredData && filteredData.length > 0 ? (
//           filteredData.map((product) => (
//             <Card
//               key={product.id}
//               sx={{ marginBottom: '5' }}
//               style={{ width: '300px', margin: '20px' }}
//             >
//               <CardContent>
//                 <Typography variant="h6">{product.title}</Typography>
//                 <Typography color="text.secondary">ID: {product.id}</Typography>
//                 <img
//                   src={`${product.images[0]}`}
//                   style={{ width: '100px', height: '100px' }}
//                   alt="Product"
//                 />
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           ))
//         ) : (
//           !isLoading && <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchBox;



// import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import useDebounce from './useDebounce';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';


// const SearchBox = ({data1}) => {
//   const [search, setSearch] = useState('');
//   const debouncedSearch = useDebounce(search, 500);

//   const handleClick=(dataele)=>{
//   const { isLoading, error, data } = useQuery({
//     queryKey: ['allProducts', search],
//     queryFn: async () => {
//       const response = await axios.get(
//         `https://dummyjson.com/products?sortBy=id&order=${dataele}`
//       );
//       return response.data;
//     },
//   });
//   }



//   // Filter the data based on the search input
//   const filteredData = data?.products?.filter((product) =>
//     product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
//   );

//   return (
//     <div style={{ width: '100%', padding: '20px' }}>
//       <input
//         type="search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
//         placeholder="Enter your search term here"
//       />

      
// <Autocomplete
//       disablePortal
//       options={data1 ? data1.map((ele) => ele) : []} 
//       sx={{ width: 300 }}
//       onClick={()=>{handleClick(data1 ? data1.map((ele) => ele):[])}}
//       renderInput={(params) => <TextField {...params} label="Category" />}
//     />


//       <div className="card">
//         {isLoading && <p>Loading...</p>}
//         {error && <p>Error: {error.message}</p>}
//         {filteredData && filteredData.length > 0 ? (
//           filteredData.map((product) => (
//             <Card
//               key={product.id}
//               sx={{ marginBottom: '5' }}
//               style={{ width: '300px', margin: '20px' }}
//             >
//               <CardContent>
//                 <Typography variant="h6">{product.title}</Typography>
//                 <Typography color="text.secondary">ID: {product.id}</Typography>
//                 <img
//                   src={`${product.images[0]}`}
//                   style={{ width: '100px', height: '100px' }}
//                   alt="Product"
//                 />
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           ))
//         ) : (
//           !isLoading && <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchBox;









//  /*********************************************************/

//*****************Sorting*********** */

//*********** sorting***********//



// //  import React, { useState } from 'react';
// //  import { useQuery } from '@tanstack/react-query';
// //  import axios from 'axios';
// //  import useDebounce from './useDebounce';
// //  import Card from '@mui/material/Card';
// //  import CardContent from '@mui/material/CardContent';
// //  import Typography from '@mui/material/Typography';
// //  import CardActions from '@mui/material/CardActions';
// //  import Button from '@mui/material/Button';
 
// //  const SearchBox = () => {
// //    const [search, setSearch] = useState('');
// //    const [sortOrder, setSortOrder] = useState('asc'); 
// //    const [currentPage, setCurrentPage] = useState(1); 
// //    const debouncedSearch = useDebounce(search, 500);
 
// //    const itemsPerPage = 6; 
 
// //  const { isLoading, error, data } = useQuery({
// //      queryKey: ['allProducts'],
// //      queryFn: async () => {
// //        const response = await axios.get(
// //          `https://dummyjson.com/products/category-list`
// //        );
// //        return response.data;
// //      },
// //    });
 
   
// //    const filteredData = data?.products?.filter((product) =>
// //      product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
// //    );
 
   
// //    const handleSort = () => {
// //      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
// //    };
 
   
// //    const handleNextPage = () => {
// //      setCurrentPage((prevPage) => prevPage + 1);
// //    };
 
// //    const handlePreviousPage = () => {
// //      setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
// //    };
 
// //    return (
// //      <div style={{ width: '100%', padding: '20px' }}>
// //        <input
// //          type="search"
// //          value={search}
// //          onChange={(e) => setSearch(e.target.value)}
// //          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
// //          placeholder="Enter your search term here"
// //        />
 
// //        <button onClick={handleSort}>
// //          {sortOrder === 'asc' ? 'Sort Descending' : 'Sort Ascending'}
// //        </button>
 
// //        <div className="card">
// //          {isLoading && <p>Loading...</p>}
// //          {error && <p>Error: {error.message}</p>}
// //          {filteredData && filteredData.length > 0 ? (
// //            filteredData.map((product) => (
// //              <Card
// //                key={product.id}
// //                sx={{ marginBottom: '5' }}
// //                style={{ width: '300px', margin: '20px', }}
// //              >
// //                <CardContent>
// //                  <Typography variant="h6">{product.title}</Typography>
// //                  <Typography color="text.secondary">ID: {product.id}</Typography>
// //                  <img
// //                    src={`${product.images[0]}`}
// //                    style={{ width: '100px', height: '100px' }}
// //                    alt="Product"
// //                  />
// //                </CardContent>
// //                <CardActions>
// //                  <Button size="small">Learn More</Button>
// //                </CardActions>
// //              </Card>
// //            ))
// //          ) : (
// //            !isLoading && <p>No products found.</p>
// //          )}
// //        </div>
 
       
// //        <div style={{ marginTop: '20px' }}>
// //          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
// //            Previous
// //          </button>
// //          <span style={{ margin: '0 10px' }}>Page {currentPage}</span>
// //          <button
// //            onClick={handleNextPage}
// //            disabled={data && data.total && currentPage * itemsPerPage >= data.total}
// //          >
// //            Next
// //          </button>
// //        </div>
// //      </div>
// //    );
// //  };
 
// //  export default SearchBox;
 
 
 
 
 
 
 



//Sorting



/******************************************************** */
// import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import useDebounce from './useDebounce';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';

// const SearchBox = () => {
//   const [search, setSearch] = useState('');
//   const [sortOrder, setSortOrder] = useState('asc'); 
//   const [currentPage, setCurrentPage] = useState(1); 
//   const debouncedSearch = useDebounce(search, 500);

//   const itemsPerPage = 6; 

// const { isLoading, error, data } = useQuery({
//     queryKey: ['allProducts', sortOrder, currentPage],
//     queryFn: async () => {
//       const response = await axios.get(
//         `https://dummyjson.com/products?sortBy=id&order=${sortOrder}&limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`
//       );
//       return response.data;
//     },
//   });

  
//   const filteredData = data?.products?.filter((product) =>
//     product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
//   );

  
//   const handleSort = () => {
//     setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
//   };

  
//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
//   };

//   return (
//     <div style={{ width: '100%', padding: '20px' }}>
//       <input
//         type="search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
//         placeholder="Enter your search term here"
//       />

//       <button onClick={handleSort}>
//         {sortOrder === 'asc' ? 'Sort Descending' : 'Sort Ascending'}
//       </button>

//       <div className="card">
//         {isLoading && <p>Loading...</p>}
//         {error && <p>Error: {error.message}</p>}
//         {filteredData && filteredData.length > 0 ? (
//           filteredData.map((product) => (
//             <Card
//               key={product.id}
//               sx={{ marginBottom: '5' }}
//               style={{ width: '300px', margin: '20px', }}
//             >
//               <CardContent>
//                 <Typography variant="h6">{product.title}</Typography>
//                 <Typography color="text.secondary">ID: {product.id}</Typography>
//                 <img
//                   src={`${product.images[0]}`}
//                   style={{ width: '100px', height: '100px' }}
//                   alt="Product"
//                 />
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           ))
//         ) : (
//           !isLoading && <p>No products found.</p>
//         )}
//       </div>

      
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handlePreviousPage} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span style={{ margin: '0 10px' }}>Page {currentPage}</span>
//         <button
//           onClick={handleNextPage}
//           disabled={data && data.total && currentPage * itemsPerPage >= data.total}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchBox;






