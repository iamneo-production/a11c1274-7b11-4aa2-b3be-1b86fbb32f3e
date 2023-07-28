import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setPass } from "../services/user-service";
import Swal from "sweetalert2";
import './css/signUp.css';

const SetPassword = () => {
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    // Validation
    if (loginDetail.username.trim() === "" || loginDetail.password.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Invalid Information",
        text: "Enter valid information!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else {
      console.log("came here verify pass");
      setPass(loginDetail.username, loginDetail.password)
        .then((response) => {
          console.log(response);
          Swal.fire({
            icon: "success",
            title: "Password Updated",
            text: "Password updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong! " + error.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };

  return (
        <div className="registration-card">
          <div className="signup-form">
            <div className="login-form-card">
              <div className="registration-form">
                <h3>Reset Password</h3>
              </div>
              <form onSubmit={handleFormSubmit}>
              <div className="login-form-styles">
                
                  <div className="signup-details">
                    <label htmlFor="email" >
                      Enter your email
                    </label><br/>
                    <input
                      type="text"
                      id="email"
                      value={loginDetail.username}
                      onChange={(e) => handleChange(e, "username")}
                    />
                  </div>

                  <div className="signup-details">
                    <label htmlFor="password" >
                      Enter new password
                    </label><br/>
                    <input
                      type="password"
                      id="password"
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </div>

                  <div className="registration-form">
                    <button type="submit" >
                      Submit
                    </button>
                  </div>
                  </div>
                </form>
             
            </div>
          </div>
        </div>
  );
};

export default SetPassword;
