import React from 'react'
import SignUp from './SignUp'

const App = () => {
  return (
    <div>
      <SignUp />
    </div>
  )
}

export default App











// import './App.css';
// import { useState } from 'react';

// function App() {
//   let [formData,setFormData]=useState({
//     name:"",
//     email:"",
//     password:"",
//     confirmpassword:"",
//     })

// const handleChange=(e)=>{
//  setFormData((preve)=>{{
//  ...preve,[e.target.name]:e.target.value
//  }})
// }

//   const handleSubmit=(e)=>{
//    e.preventDefault();
//   }
//   return (
//     <div className="App">
//      <form onSubmit={handleSubmit}>
//       <input  name="name" type="text" onChange={handleChange} />
//       <input name="email" type="email" onChange={handleChange} />
//       <input name="password" type="password"  onChange={handleChange}/>
//       <input name="confirmpassword" type="password" onChange={handleChange}/>
//       <button type="submit">Submit</button>
//      </form>
//     </div>
//   );
// }

// export default App;
