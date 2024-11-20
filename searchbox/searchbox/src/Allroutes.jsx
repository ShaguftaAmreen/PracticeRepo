import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import ComboBox from './ComboBox';
import SearchBox from './SearchBox';

const Allroutes = () => {
  const Layout = () => {
    return (
      <>
        <ComboBox />
        {/* <SearchBox/> */}
        <Outlet />
      </>
    );
  };

  const Test=()=>{
    return <p>test</p>
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
              {/* Use a relative path for the nested route */}
            {/* <Route index element={<ComboBox/>}/> */}
          <Route path="singleproduct/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Allroutes;





/*import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import ComboBox from './ComboBox';

const Allroutes = () => {

  const Layout = () => {
    return (
      <>
        <ComboBox />
        <Outlet />
      </>
    );
  };

  return (
    <div>
        <Routes>
        <Route path='/main' element={<Layout />}>
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        </Route>
        </Routes>
    </div>
  );
};

export default Allroutes; */







// import React from 'react'
// import { Route, Routes,Layout } from 'react-router-dom'
// import SingleProduct from './SingleProduct'

// const Allroutes = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path='/main' element={<Layout />} >
//             <Route path='/singleproduct/:id' element={<SingleProduct />} />
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default Allroutes
