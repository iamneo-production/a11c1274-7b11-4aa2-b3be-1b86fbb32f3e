import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpAdmin } from "../services/user-service";
import Swal from "sweetalert2";
import './css/signUp.css';
import logoImage from './assets/projectlogo.jpg';

const AdminSignup = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = () => {
    const pattern = /^[a-zA-Z0-9._%+-]+@virtusa/;
    if (!pattern.test(email)) {
      setEmailError("Please enter a valid email ending with @virtusa.com.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateEmail();
  };

  const [data, setData] = useState({
    email: "",
    name: "",
    height: "",
    weight: "",
    password: "",
    age: "",
    gender: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const resetData = () => {
    setData({
      email: "",
      name: "",
      height: "",
      weight: "",
      password: "",
      age: "",
      gender: "",
    });
  };

  const submitForm =async (event) => {
    event.preventDefault();
    validateEmail(email);
    if (emailError) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email ending with @virtusa.com.",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else {
      event.preventDefault();
      console.log(data);
      signUpAdmin(data)
        .then((resp) => {
          console.log(resp);
          console.log("success log");
          Swal.fire({
            icon: "success",
            title: "User Registered Successfully",
            text: "Use below Login button to login",
            showConfirmButton: false,
            timer: 1500,
          });
          setData({
            email: "",
            name: "",
            height: "",
            weight: "",
            password: "",
            age: "",
            gender: "",
          });
        })
        .catch((error) => {
          console.log(error);
          console.log("Error log");
          setError({
            errors: error,
            isError: true,
          });
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong! " + error,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };

  const navigate = useNavigate();

  const handleAdminLogin=()=>{
    navigate('/login');
  }

  return (
    
      <div className="registration-card">
        <div className="signup-form">
          <div className="signup-form-card signup-form-width">
          <div className="card-part2">
          <h1>Fitness Tracking portal</h1>
          <img src={logoImage} alt="GetFitAbit" />
        </div>
        <div className="card-part1">
        <div className="registration-form">
              <h1>Admin Registration Form</h1>
            </div>
            <form onSubmit={submitForm}>
            <div className="form-styles">
              
                <div className="signup-details">
                  <label htmlFor="name" >
                    Enter Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      error.errors?.response?.data?.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    placeholder="Enter Your name here"
                    value={data.name}
                    onChange={(e) => handleChange(e, "name")}
                  />
                  {error.errors?.response?.data?.name && (
                    <div className="invalid-feedback">
                      {error.errors?.response?.data?.name}
                    </div>
                  )}
                </div>

                <div className="signup-details">
                  <label htmlFor="email" >
                    Enter Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      error.errors?.response?.data?.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    placeholder="Enter your email here"
                    value={data.email}
                    onChange={(e) => {
                      handleEmailChange(e);
                      handleChange(e, "email");
                    }}
                    required
                  />
                  {emailError && (
                    <small className="text-danger">{emailError}</small>
                  )}
                  {error.errors?.response?.data?.email && (
                    <div className="invalid-feedback">
                      {error.errors?.response?.data?.email}
                    </div>
                  )}
                </div>

                <div className="signup-details">
                  <label htmlFor="password" >
                    Enter Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      error.errors?.response?.data?.password ? "is-invalid" : ""
                    }`}
                    id="password"
                    placeholder="Enter your password here"
                    value={data.password}
                    onChange={(e) => handleChange(e, "password")}
                  />
                  {error.errors?.response?.data?.password && (
                    <div className="invalid-feedback">
                      {error.errors?.response?.data?.password}
                    </div>
                  )}
                </div>

                <div className="signup-details">
                  <label htmlFor="height" >
                    Enter Height
                  </label>
                  <input
                    type="number"
                    className={`form-control ${
                      error.errors?.response?.data?.height ? "is-invalid" : ""
                    }`}
                    id="height"
                    placeholder="Enter your height here in Cm"
                    value={data.height}
                    onChange={(e) => handleChange(e, "height")}
                  />
                  {error.errors?.response?.data?.height && (
                    <div className="invalid-feedback">
                      {error.errors?.response?.data?.height}
                    </div>
                  )}
                </div>

                <div className="signup-details">
                  <label htmlFor="weight" >
                    Enter Weight
                  </label>
                  <input
                    type="number"
                    className={`form-control ${
                      error.errors?.response?.data?.weight ? "is-invalid" : ""
                    }`}
                    id="weight"
                    placeholder="Enter your weight here in Kg"
                    value={data.weight}
                    onChange={(e) => handleChange(e, "weight")}
                  />
                  {error.errors?.response?.data?.weight && (
                    <div className="invalid-feedback">
                      {error.errors?.response?.data?.weight}
                    </div>
                  )}
                </div>

                <div className="signup-details">
                  <label htmlFor="age" >
                    Enter Age
                  </label>
                  <input
                    type="number"
                    className={`form-control ${
                      error.errors?.response?.data?.age ? "is-invalid" : ""
                    }`}
                    id="age"
                    placeholder="Enter your age here"
                    value={data.age}
                    onChange={(e) => handleChange(e, "age")}
                  />
                  {error.errors?.response?.data?.age && (
                    <div className="invalid-feedback">
                      {error.errors?.response?.data?.age}
                    </div>
                  )}
                </div>

                <div className="signup-details">
                  <label htmlFor="gender" >
                    Enter gender
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      error.errors?.response?.data?.gender ? "is-invalid" : ""
                    }`}
                    id="gender"
                    placeholder="Enter your gender here"
                    value={data.gender}
                    onChange={(e) => handleChange(e, "gender")}
                  />
                  {error.errors?.response?.data?.gender && (
                    <div className="invalid-feedback">
                      {error.errors?.response?.data?.gender}
                    </div>
                  )}
                </div>
                </div>
                <div className="registration-form">
                  <button type="submit">Register</button>
                  <button onClick={resetData} type="reset">Reset</button>
                </div>
              </form>
              
              <div className="registration-form">
                <p>Already have an account?<button onClick={handleAdminLogin}>Login</button></p>
              </div>
        </div>
            </div>
          </div>      
    </div>
  );
};

export default AdminSignup;
