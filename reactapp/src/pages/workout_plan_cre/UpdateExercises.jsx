import React, { useEffect, useState } from "react";
import { UpdateExercise,getExerciseById } from '../../services/user-service';
import { useNavigate, useParams } from "react-router-dom";
import '../../index.css';
import Swal from 'sweetalert2';
import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';
import  FitnessCenterIcon  from '@mui/icons-material/FitnessCenter';
import '../../components/css/signUp.css';

import './addexercise.css';
const UpdateExercises = () =>{

    const {id} = useParams();

    const navigate = useNavigate();

    const [data,setData] = useState({
        name:"",
        description:"",
        is_completed:"",
    })


    useEffect(()=>{
        getExerciseById(id)
        .then((resp)=>{
            setData(resp);
            console.log("rsp",resp);
        })
    }, [] );

console.log(data)

    const handleUpdateExercise = () => { 
          // pass workout  id not user id 
          UpdateExercise(id,data)  
          .then((resp) => {
            Swal.fire({
              icon: "success",
              title: "Exercise Added Successfully",
              text: "Exercise is added successfully!",
              showConfirmButton: false,
              timer: 1500,
            })
            navigate("/user/viewexercises"); 
          }
          )
          .catch((err) => {
            console.log(err);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          );
      } 

      const handleChange=(event,values)=>{
        setData({
            ...data,
            [values]:event.target.value
        })
      }



    return(
        <div className="exercise">
      <div className="rectangle"></div>
      <div className="exercise-container">
        
        <div className="exercise-section">
        <div className="close-icon-2">
            <CloseIcon onClick={()=>navigate("/user/workoutsplan")} />
          </div>
          <div className="exercise-section-title">
            <h2>Update Exercises</h2>
            </div>

         
    
          <div className="exercise-form-group">
            <div className="exercise-input-container">
              <div className='fitness-icon'>
              <FitnessCenterIcon/>
              </div>
              <input
                type="text"
                placeholder="Enter Exercise Name"
                className="input-icon"
                value={data.name}
                onChange={(e)=> handleChange(e,"name")}
                required
              />
            </div>
          </div>

          <div className="exercise-form-group">
            <div className="exercise-input-container">
              <div className='descrp-icon'>
              <DescriptionIcon/>
              </div>
              <textarea
                placeholder="Enter Exercise Description"
                className="input-icon"
                value={data.description}
                onChange={(e) => handleChange(e,"description")}
              ></textarea>
            </div>
          </div>
          <div className="exercise-form-group">
            <lable className='label'>Status:</lable>
            <select value={data.is_completed} type="text"
            onChange={(e)=>handleChange(e,"is_completed")} required>
              <option value='Not completed'>Not completed</option>
              <option value='completed'>completed</option>
            </select>
            
          </div>

          <div className="registration-form">
            <button className="add-exercise-button" onClick={handleUpdateExercise}>
              Update Exercise
            </button>
            
          </div>
          
        </div>
      </div>
    </div>
    )
}

export default UpdateExercises