import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';
import  FitnessCenterIcon  from '@mui/icons-material/FitnessCenter';
import  ArrowBackIcon  from '@mui/icons-material/ArrowBack';
import Swal from 'sweetalert2';
import { getWorkoutNamesbasedonUserId } from '../../services/user-service';
import { postExercise } from '../../services/user-service';
import { getWorkoutIdbasedOnUserId } from '../../services/user-service';
import './addexercise.css';
import './AddWorkouts.css';
import '../../index.css';
import '../../components/css/signUp.css';


const Addexercises = () =>{

    const navigate=useNavigate();

    const [exerciseName, setExerciseName] = useState('');
    const [exerciseDesc, setExerciseDesc] = useState('');
    const [is_completed,setIsCompleted]=useState('');
    const [selectedWorkoutDate, setSelectedWorkoutDate] = useState('');
    const [wid,setWid]=useState([]);
    const [wdates,setWdates]=useState([]);
  
    useEffect(() => {
      const dataString = localStorage.getItem('data');
      const data = JSON.parse(dataString);
      const userdto = data.userdto;
      getWorkoutIdbasedOnUserId(userdto.id).then((resp) => {
        setWid(resp);

      });
      getWorkoutNamesbasedonUserId(userdto.id).then((resp) => {
        setWdates(resp);
      }
      );
    }, []);


    const handleAddExercise = () => {
      if (exerciseName && exerciseDesc && selectedWorkoutDate && is_completed!=="") {
        
        const newExercise = {
          name: exerciseName,
          description: exerciseDesc,
          workoutDate: selectedWorkoutDate,
          is_completed : is_completed
        };

        postExercise(selectedWorkoutDate,newExercise)

        .then((resp) => {
          Swal.fire({
            icon: "success",
            title: "Exercise Added Successfully",
            text: "Exercise is added successfully!",
            showConfirmButton: false,
            timer: 1500,
          })
          navigate("/user/addexercises");
          setExerciseName('');
          setExerciseDesc('');
          setSelectedWorkoutDate(''); 
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
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Fields are Required',
        text: 'Please provide data for all required fields.',
        showConfirmButton: false,
        timer: 1500,
      });
    }
    };
    
  
    return (
        <div className="exercise">
      
      <div className="exercise-container">
        
        <div className="exercise-section">
          <div className='heading-back-close'>
            <div >
              <ArrowBackIcon onClick={()=>navigate("/user/addworkouts")} />
            </div>
            <div className="exercise-section-title">
              <h2>Add Exercises</h2>
            </div>
            <div >
              <CloseIcon onClick={()=>navigate("/user/workoutsplan")} />
            </div>
          </div>
        
          
          

          <div className="exercise-form-group">
            <div className="exercise-input-container">
              <select
                className="input-icon"
                value={selectedWorkoutDate}
                onChange={(e) => setSelectedWorkoutDate(e.target.value)}
              >
                <option value="">Select Workout Option</option>
                {wid.map((wid,index) => (
                  <option key={wid} value={wid}>
                    Date : {wdates[index]}
                  </option>
                ))}
              </select>
            </div>
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
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
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
                value={exerciseDesc}
                onChange={(e) => setExerciseDesc(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="exercise-form-group">
            <lable className='label'>Status:</lable>
            <div className="exercise-input-container">
            <select
                value={is_completed}
                type="text"
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  if (selectedValue !== "") {
                    setIsCompleted(selectedValue);
                  }
                }}
                required
              >
                <option value="">Choose from here</option>
                <option value="Not completed">Not completed</option>
                <option value="completed">Completed</option>
            </select>
            </div>
          </div>

          <div className="registration-form">
            <button className="add-exercise-button" onClick={handleAddExercise}>
              Add Exercise
            </button>
            <button className="next-button" onClick={()=>navigate("/user/addsets")}>
              Next
            </button>
          </div>
          
        </div>
      </div>
    </div>
    )
}

export default Addexercises