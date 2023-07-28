import React,{useState, useEffect} from 'react';
import '../../index.css';
// import CloseIcon from '@mui/icons-material/Close';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import TimerIcon from '@mui/icons-material/Timer';
// import DescriptionIcon from '@mui/icons-material/Description';
import { useNavigate, useParams } from 'react-router-dom';
import { getWorkoutsByWorkoutId,putWorkoutById,getValidationWorkoutCompletion } from '../../services/user-service';
import Swal from 'sweetalert2';
import './AddWorkouts.css';
import '../../components/css/signUp.css';


const UpdateWorkouts = ()=>{

    const {id} = useParams();
    const navigate = useNavigate();

    const [workoutData,setWorkoutData] = useState({
        date:'',
        duration:'',
        notes:'',
        is_completed:''
    })
    
  useEffect(()=>{
    getWorkoutsByWorkoutId(id)
    .then((resp)=>{
        setWorkoutData(resp);
    })
  },[]);

  console.log(workoutData,"workoutData");

  const handleUpdateWorkout = (e) => {
    e.preventDefault();
    if(workoutData.is_completed==='completed'){
      getValidationWorkoutCompletion(id)
      .then((data)=>{
        console.log(data);
        if(data==='yes'){
          putWorkoutById(id,workoutData)
          .then((resp) => {
            Swal.fire({
              icon: "success",
              title: "workout Updated Successfully",
              text: "workout is Updated successfully!",
              showConfirmButton: false,
              timer: 1500,
              
            });
            navigate("/user/viewworkouts");
          }
          ).catch((err) => {
              console.log(err);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                showConfirmButton: false,
                timer: 1500,
              });
            });
        }else{
          Swal.fire({
            icon: "error",
            title: "Incomplete Exercises",
            text: "Complete Exercises before workout!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/user/viewworkouts");
        }
      })
    }else{
      putWorkoutById(id,workoutData)
          .then((resp) => {
            Swal.fire({
              icon: "success",
              title: "workout Updated Successfully",
              text: "workout is Updated successfully!",
              showConfirmButton: false,
              timer: 1500,
              
            });
            navigate("/user/viewworkouts");
          }
          ).catch((err) => {
              console.log(err);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                showConfirmButton: false,
                timer: 1500,
              });
            });
    }
    } 
    
    const handleChange=(event,values)=>{
        setWorkoutData({
            ...workoutData,
            [values]:event.target.value
        })
      }


    return(
        <div className="workout">
            <div className="rectangle"></div>
                <div className="workout-container">
                    <div className="workout-section">
                        <div onClick={() => navigate("/user/workoutsplan")}>
                            ❌
                     </div>
                    <div onClick={() => navigate("/user/workoutsplan")}>
                      🔙
                 </div>
            <div className="workout-section-title"> 
                <h2>Add Workouts</h2>
            </div> 

          <form onSubmit={handleUpdateWorkout}>
            <div className="workout-form-group">
              <div className="workout-input-container">
                <input
                  type="date"
                  placeholder="Enter Workout Date"
                  className="input-icon"
                  value={workoutData.date}
                  onChange={(e) => handleChange(e,"date")}
                  required
                />
              </div>
            </div>

            <div className="workout-form-group">
              <div className="workout-input-container">
            
                <input
                  
                  type="number"
                  placeholder="Enter Workout Duration"
                  className="input-icon"
                  value={workoutData.duration}
                  onChange={(e) => handleChange(e,"duration")}
                  required
                />
              </div>
            </div>

            <div className="workout-form-group">
              <div className="workout-input-container">
                <textarea
                  placeholder="Enter workout Description"
                  className="input-icon"
                  value={workoutData.notes}
                  onChange={(e) => handleChange(e,"notes")}
                  required
                ></textarea>
              </div>
            </div>
           
            <div className="workout-form-group">
              
            
              <label className='label'>Status:</label>
                <select value={workoutData.is_completed} type="text"
                onChange={(e)=> handleChange(e,"is_completed")} required>
               
                  <option value='Not completed'>Not completed</option>
                  <option value='completed'>completed</option>
                </select>
                
            </div>

            <div className="registration-form">
              <button type="submit" className="add-workout-button">
                Update Workout
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default UpdateWorkouts