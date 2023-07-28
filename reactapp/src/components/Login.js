import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginUser } from "../services/user-service";
import { doLogin } from "../auth";
import userContext from "../context/userContext";
import { useContext } from "react";
import './css/signUp.css'
import logoImage from './assets/projectlogo.jpg';

const Login = () => {
  const userContxtData = useContext(userContext);
  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleforgotRegsiter = () => {
    navigate("/signup");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    //validation
    if (loginDetail.username.trim() === "" || loginDetail.password.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "Username or Password is required!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    //submit the data to server to generate token
    loginUser(loginDetail)
      .then((data) => {
        console.log(data);

        //save the data to localstorage
        doLogin(data, () => {
          console.log("login detail is saved to localstorage");


          const dataString = localStorage.getItem('data');
          const data = JSON.parse(dataString);
          if (data && data.userdto && data.userdto.roles && data.userdto.roles.length > 0) {
            const roless = data.userdto.roles[0].name;
            console.log(data);
          }

          //navigate to dashboard
          if (data.userdto.roles[0].name === "ROLE_NORMAL") {
            navigate("/user/dashboard");
          } else{
            navigate("/user/admindashboard");
          }
          
        });

        Swal.fire({
          icon: "success",
          title: "Login Success",
          text: "You have successfully logged in!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: error.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong on the server!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
      <div className="registration-card">
        <div className="signup-form">
          <div className="signup-form-card login-form-width">
            <div className="card-part2">
              <h1>Fitness Tracking portal</h1>
              <img src={logoImage} alt="GetFitAbit" />
            </div>
            <div className="card-part1">
              <div className="registration-form">
                <h1>Login Here</h1>
              </div>
              <form onSubmit={handleFormSubmit} className="login-styles-adjust">
              <div className="login-form-styles">
              
                <div className="signup-details">
                  <label htmlFor="email">
                    Enter Email
                  </label><br/>
                  <input
                    type="text"
                    id="email"
                    value={loginDetail.username}
                    onChange={(e) => handleChange(e, "username")}
                    required
                  />
                </div>
                <div className="signup-details">
                  <label htmlFor="password">
                    Enter password
                  </label><br/>
                  <input
                    type="password"
                    id="password"
                    value={loginDetail.password}
                    onChange={(e) => handleChange(e, "password")}
                    required
                  />
                </div>
                <div className="registration-form">
                  <button type="submit" >Login</button>
                  <button onClick={handleforgotRegsiter}>Register</button>
                </div>
                </div>
              </form>
              <div className="registration-form">
                  <p>
                    Forgot Password?{" "}
                    <Link to="/forgotpass">Click Here</Link>
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
