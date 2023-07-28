import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOTP, verifyOTP } from "../services/user-service";
import Swal from "sweetalert2";
import './css/signUp.css';

const ForgotPassword = () => {
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

  const handleOTP = () => {
    if (loginDetail.username.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    console.log(loginDetail.username);
    console.log("handle otp called");
    // Send OTP to email
    sendOTP(loginDetail.username)
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "OTP Sent",
          text: "OTP has been sent successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong on the server: " + error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    // Validation
    if (loginDetail.username.trim() === "" || loginDetail.password.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "OTP is required",
        text: "Please enter the OTP!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else {
      console.log("came here verify pass");
      verifyOTP(loginDetail.username, loginDetail.password)
        .then((data) => {
          if (data === "Incorrect password or time has expired") {
            Swal.fire({
              icon: "error",
              title: "Verification Failed",
              text: "Incorrect password or time has expired",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              icon: "success",
              title: "Verification Successful",
              text: "OTP verified successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/setpass");
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong on the server: " + error.code,
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
                <h3>ForgotPassword</h3>
              </div>
              <form onSubmit={handleFormSubmit}>
              <div className="login-form-styles">
                  <div className="signup-details">
                    <label htmlFor="email" >
                      Enter Email for OTP Verification
                    </label><br/>
                    <input
                      type="text"
                      id="email"
                      value={loginDetail.username}
                      onChange={(e) => handleChange(e, "username")}
                    />
                  </div>

                  <div className="registration-form">
                    <button type="button" onClick={handleOTP}>
                      Send OTP
                    </button>
                  </div>

                  <div className="signup-details">
                    <label htmlFor="password" >
                      Enter OTP
                    </label><br/>
                    <input
                      type="number"
                      id="password"
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </div>

                  <div className="registration-form">
                    <button type="submit">
                      Verify
                    </button>
                  </div>
              </div>
              </form>
            </div>
          </div>
      </div>

  );
};

export default ForgotPassword;