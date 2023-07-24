import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/user-service";
import Swal from "sweetalert2";
import './css/signUp.css';
import logoImage from './assets/projectlogo.jpg';

const Signup = () => {
  const navigate = useNavigate();
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

  const submitForm = (event) => {
    event.preventDefault();

    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "User is registered successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
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
          title: "Registration Failed",
          text: "Failed to register user!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

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
            <h1>Registration Form</h1>
        </div>
      
        <form onSubmit={submitForm}>
        <div className="form-styles">
          
            <div className="signup-details">
                <label htmlFor="name">Enter Name</label><br/>
                <input
                    type="text"
                    placeholder="Enter Your name here"
                    id="name"
                    onChange={(e) => handleChange(e, "name")}
                    value={data.name}
                    required
                />
            </div>
        
          <div className="signup-details">
              <label htmlFor="email">Enter Email</label><br/>
              <input
                  type="email"
                  placeholder="Enter your email here"
                  id="email"
                  onChange={(e) => handleChange(e, "email")}
                  value={data.email}
                  required
              />
          </div>
          <div className="signup-details">
              <label htmlFor="password">Enter Password</label><br/>
              <input
                  type="password"
                  placeholder="Enter your password here"
                  id="password"
                  onChange={(e) => handleChange(e, "password")}
                  value={data.password}
                  required
              />
          </div>

          <div className="signup-details">
              <label htmlFor="height">Enter Height</label><br/>
              <input
                  type="number"
                  placeholder="Enter your height here in Cm"
                  id="height"
                  onChange={(e) => handleChange(e, "height")}
                  value={data.height}
                  required
              />
        </div>
        
          <div className="signup-details">
              <label htmlFor="weight">Enter Weight</label><br/>
              <input
                  type="number"
                  placeholder="Enter your weight here in Kg"
                  id="weight"
                  onChange={(e) => handleChange(e, "weight")}
                  value={data.weight}
                  required
              />
          </div>
        
          <div className="signup-details">
              <label htmlFor="age">Enter Age</label><br/>
              <input
                  type="number"
                  placeholder="Enter your age here"
                  id="age"
                  onChange={(e) => handleChange(e, "age")}
                  value={data.age}
                  required
              />
          </div>
        
          <div className="signup-details">
              <label htmlFor="gender">Enter gender</label><br/>
              <input
                  type="text"
                  placeholder="Enter your gender here"
                  id="gender"
                  onChange={(e) => handleChange(e, "gender")}
                  value={data.gender}
                  required
              />
          </div>
        
          
          </div>
          <div className="registration-form">
              <button type="submit">Register</button>
              <button onClick={resetData} type="reset">
                Reset
              </button>
          </div>
        </form>
        
        <div className="registration-form">
            <p>
              Already have an account? <Link to="/login">Click Here</Link>
            </p>
        </div>
      </div>
        
      </div>
    </div>  
  </div>
    
  );
};

export default Signup;
