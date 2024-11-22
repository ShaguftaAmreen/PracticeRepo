import React, { useState } from "react";
import "./App.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updatePostMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post("http://localhost:4000/api/signup", data);
      return response.data;
    },
    onSuccess: (response) => {
      toast.success(response); // Toastify success message
    },
    onError: (error) => {
      toast.error(error.response?.data || "An error occurred. Please try again."); // Toastify error message
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmpassword } = formData;

    if (!name || !email || !password || !confirmpassword) {
      toast.error("All fields are required.");
      return;
    }

    if (password !== confirmpassword) {
      toast.error("Passwords do not match.");
      return;
    }

    updatePostMutation.mutate(formData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Sign Up Form</h2>
        
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            name="confirmpassword"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmpassword}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <ToastContainer />
    </div>
  );
}


export default SignUp;









/*import React, { useState } from "react";
import "./App.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [message, setMessage] =  useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updatePostMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post("http://localhost:4000/api/signup",data );
      return response.data;
    },
    onSuccess: (response) => setMessage(response),
    onError: (error) =>
      setMessage(error.response?.data || "An error occurred. Please try again."),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmpassword } = formData;

    if (!name || !email || !password || !confirmpassword) {
      setMessage("All fields are required.");
      return;
    }

    if (password !== confirmpassword) {
      setMessage("Passwords do not match.");
      return;
    }

    updatePostMutation.mutate(formData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Sign Up Form</h2>
        {message && <p className="message">{toast({message})}</p>}
        <div>   <ToastContainer /></div>
     
        

        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            name="confirmpassword"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmpassword}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;





/*import React, { useState } from "react";
import "./App.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updatePostMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post("http://localhost:4000/api/signup", data);
      return response.data;
    },
    onSuccess: (response) => setMessage(response),
    onError: (error) =>
      setMessage(error.response?.data || "An error occurred. Please try again."),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmpassword } = formData;

    if (!name || !email || !password || !confirmpassword) {
      setMessage("All fields are required.");
      return;
    }

    if (password !== confirmpassword) {
      setMessage("Passwords do not match.");
      return;
    }

    updatePostMutation.mutate(formData);

    setMessage("Form submitted successfully!");
    console.log(name, email, password, confirmpassword);
      // await updatePostMutation.mutateAsync(formData);
      // setMessage("User signed up successfully!");
    
      // setMessage(error.response?.data || "An error occurred. Please try again.");
    
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Sign Up Form</h2>

        {message && <p className="message">{message}</p>}

        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            name="confirmpassword"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmpassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;








/*import React, { useState } from "react";
import "./App.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function SignUp() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [message, setMessage] = useState("");

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const updatePostMutation = useMutation({
    mutationFn: async (data) => {
       const response = await axios.post('http://localhost:4000/api/signup', data);
        return response.data; 
      },
    onSuccess: (response) =>
      console.log("Success in post mutation", response),
    onError: (error) =>
      console.error("Error during mutation:", error.message),
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmpassword } = formData;

    
    if (!name || !email || !password || !confirmpassword) {
      setMessage("All fields are required.");
      return;
    }

    
    if (password !== confirmpassword) {
      setMessage("Passwords do not match.");
      return;
    }

    
    updatePostMutation.mutate(formData);

    setMessage("Form submitted successfully!");
    console.log(name, email, password, confirmpassword);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Sign Up Form</h2>

        {message && <p className="message">{message}</p>}

        {/* {message && alert(message)} */
      /*<div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        
        <div>
          <label>Confirm Password</label>
          <input
            name="confirmpassword"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmpassword}
            onChange={handleChange}
          />
        </div>
    <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
*/


/******************************************************/

// import React, { useState } from "react";
// import "./App.css";
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";

// function SignUp() {
  
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmpassword: "",
//   });
//   const [message, setMessage] = useState("");

  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

  
//   const updatePostMutation = useMutation({
//     mutationFn: (data) =>
//       axios.post(`https://jsonplaceholder.typicode.com/posts`, data),
//     onSuccess: (response) =>
//       console.log("Success in post mutation", response.data),
//   });

  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, password, confirmpassword } = formData;

    
//     if (!name || !email || !password || !confirmpassword) {
//       setMessage("All fields are required.");
//       return;
//     }

    
//     if (password !== confirmpassword) {
//       setMessage("Passwords do not match.");
//       return;
//     }

    
//     updatePostMutation.mutate(formData);

//     setMessage("Form submitted successfully!");
//     console.log(name, email, password, confirmpassword);
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit} className="form-container">
//         <h2>Sign Up Form</h2>

//         {/* {message && <p className="message">{message}</p>} */}

//         {message && alert(message)}
//         <div>
//           <label>Name</label>
//           <input
//             name="name"
//             type="text"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>

        
//         <div>
//           <label>Email</label>
//           <input
//             name="email"
//             type="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>

        
//         <div>
//           <label>Password</label>
//           <input
//             name="password"
//             type="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>

        
//         <div>
//           <label>Confirm Password</label>
//           <input
//             name="confirmpassword"
//             type="password"
//             placeholder="Confirm your password"
//             value={formData.confirmpassword}
//             onChange={handleChange}
//           />
//         </div>
//     <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;
