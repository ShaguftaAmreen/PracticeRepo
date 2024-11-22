import './App.css';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm();

  const onSubmit =   (data) => {
      fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST"})
     .then((res)=>{res.json().then((data)=>{console.log("data is comming",data)})})
     .catch((err)=>{
      console.log("data is not coming",err)
     })
      //new Promise((resolve)=>setTimeout(resolve,3000))
    // console.log("Submitting the form", data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name :</label>
          <input  className={errors.firstName&&"input-error"}
            {...register("firstName", {
              required: "First name is required",
              maxLength: {
                value: 20,
                message: "First name cannot exceed 20 characters",
              },
              minLength: {
                value: 3,
                message: "First name must be at least 3 characters",
              },
              pattern: {
                value: /^[A-Za-z\s]{3,20}$/,
                message: "Only letters and spaces are allowed, between 3 and 20 characters",
              }
            })}
          />
          {errors.firstName && <p style={{ color: "red" }}>{errors.firstName.message}</p>}
        </div>

        <div>
          <label>Middle Name :</label>
          <input className={errors.middleName&&"input-error"}
            {...register("middleName", {
              required: "Middle name is required",
              maxLength: {
                value: 20,
                message: "Middle name cannot exceed 20 characters",
              },
              minLength: {
                value: 3,
                message: "Middle name must be at least 3 characters",
              },
              pattern: {
                value: /^[A-Za-z\s]{3,20}$/,
                message: "Only letters and spaces are allowed, between 3 and 20 characters",
              }
            })}
          />
          {errors.middleName && <p style={{ color: "red" }}>{errors.middleName.message}</p>}
        </div>

        <div>
          <label>Last Name :</label>
          <input  className={errors.lastName&&"input-error"}
            {...register("lastName", {
              required: "Last name is required",
              maxLength: {
                value: 20,
                message: "Last name cannot exceed 20 characters",
              },
              minLength: {
                value: 3,
                message: "Last name must be at least 3 characters",
              },
              pattern: {
                value: /^[A-Za-z\s]{3,20}$/,
                message: "Only letters and spaces are allowed, between 3 and 20 characters",
              }
              
            })}
          />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName.message}</p>}
        </div>
        <div>
        <label>Email</label>
        <input className={errors.email&&"input-error"}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
      </div>

        <br />

        <input type="submit"  disabled={isSubmitting}
        value={isSubmitting? "Submitting":"Submit"}
         />
      </form>
    </div>
  );
}

export default App;






