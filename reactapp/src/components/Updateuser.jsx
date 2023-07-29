import React, { useEffect } from 'react'
import { useState } from "react";
import Swal from "sweetalert2";
import {updateUserdetails,getUserById} from '../services/user-service';
import { useNavigate, useParams } from 'react-router-dom';
import './css/signUp.css';
import '../pages/goalsetting/goalsetting.css';

function Updateuser() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [userdata, setUserData] = useState({
    email: '',
    name: '',
    height: '',
    weight: '',
    age: '',
    gender: '',
  });

  useEffect(()=>{
    getUserById(id)
    .then((data)=>{
      setUserData(data);
    })
  } , [])
  
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // handle change
  const handleChange = (event, property) => {
    //dynamic setting the values
    setUserData({ ...userdata, [property]: event.target.value });
  };

  //reseting the form
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/user/profile");
  };

  
//submit the form
const submitForm = (event) => {
  event.preventDefault();



  //call server api for sending data
  updateUserdetails(id,userdata)
    .then((resp) => {
      console.log("success log");
      Swal.fire({
        icon: 'success',
        title: 'User Updated Successfully!',
        text: 'User Details has been updated successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
      setUserData({
        email: '',
        name: '',
        height: '',
        weight: '',
        age: '',
        gender: '',
      });
      navigate("/user/profile");
    })
    .catch((error) => {
      console.log(error);
      console.log("Error log");
      //handle errors in proper way
      setError({
        errors: error,
        isError: true,
      });
    });
};


  return (
    <div className="registration-card">
      <div className="signup-form">
        <div className="goals-card">
          <div className="add-goals">
            <h1>Update your details</h1>
          </div>
      
        <form onSubmit={submitForm}>
        <div className='goals-styles'>
          {/* Name field */}
          <div className='signup-details'>
            <label htmlFor="name">Enter Name:</label>
            <input
              type="text"
              placeholder="Enter Your name here"
              id="name"
              onChange={(e) => handleChange(e, 'name')}
              value={userdata.name}
              required
            />
            {error.errors?.response?.data?.name && (
              <span>{error.errors.response.data.name}</span>
            )}
          </div>

          {/* Email field */}
          <div className='signup-details'>
            <label htmlFor="email">Enter Email:</label>
            <input
              type="email"
              placeholder="Enter your email here"
              id="email"
              onChange={(e) => handleChange(e, 'email')}
              value={userdata.email}
              required
            />
            {error.errors?.response?.data?.email && (
              <span>{error.errors.response.data.email}</span>
            )}
          </div>

          {/* Height field */}
          <div className='signup-details'>
            <label htmlFor="height">Enter Height:</label>
            <input
              type="number"
              placeholder="Enter your height here in Cm"
              id="height"
              onChange={(e) => handleChange(e, 'height')}
              value={userdata.height}
              required
            />
            {error.errors?.response?.data?.height && (
              <span>{error.errors.response.data.height}</span>
            )}
          </div>

          {/* Weight field */}
          <div className='signup-details'>
            <label htmlFor="weight">Enter Weight:</label>
            <input
              type="number"
              placeholder="Enter your weight here in Kg"
              id="weight"
              onChange={(e) => handleChange(e, 'weight')}
              value={userdata.weight}
              required
            />
            {error.errors?.response?.data?.weight && (
              <span>{error.errors.response.data.weight}</span>
            )}
          </div>

          {/* Age field */}
          <div className='signup-details'>
            <label htmlFor="age">Enter Age:</label>
            <input
              type="number"
              placeholder="Enter your age here"
              id="age"
              onChange={(e) => handleChange(e, 'age')}
              value={userdata.age}
              required
            />
            {error.errors?.response?.data?.age && (
              <span>{error.errors.response.data.age}</span>
            )}
          </div>

          {/* Gender field */}
          <div className='signup-details'>
            <label htmlFor="gender">Enter Gender:</label>
            <input
              type="text"
              placeholder="Enter your gender here"
              id="gender"
              onChange={(e) => handleChange(e, 'gender')}
              value={userdata.gender}
              required
            />
            {error.errors?.response?.data?.gender && (
              <span>{error.errors.response.data.gender}</span>
            )}
          </div>

          </div>
          <div className="registration-form">
            <button type="submit">Update</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      
    </div>
    </div>
    </div>
  )
}

export default Updateuser

