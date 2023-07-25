import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TimerIcon from '@mui/icons-material/Timer';
import DescriptionIcon from '@mui/icons-material/Description';
import { postWorkout } from '../../services/user-service';
import Swal from 'sweetalert2';
import '../../index.css';
import './AddWorkouts.css';
import '../../components/css/signUp.css';
const Addworkouts = () =>{

    const navigate = useNavigate();
    
  const [workoutDate, setWorkoutDate] = useState('');
  const [workoutDur, setWorkoutDur] = useState('');
  const [workoutDesc, setWorkoutDesc] = useState('');
  const [status,setStatus] = useState('');
  const [workoutList, setWorkoutList] = useState([]);

  const handleAddWorkout = (e) => {
    e.preventDefault();

    if (workoutDate && workoutDur && status!=="") {
      const newWorkout = {
        date: workoutDate,
        duration: workoutDur,
        notes: workoutDesc,
        is_completed: status
      };

      setWorkoutList([...workoutList, newWorkout]);

      console.log(newWorkout);

      const dataString = localStorage.getItem('data');
      const data = JSON.parse(dataString);
      const userdto = data.userdto;


      postWorkout(userdto.id,newWorkout)
        .then((resp) => {
          Swal.fire({
            icon: "success",
            title: "workout Added Successfully",
            text: "workout is added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/user/addworkouts");
          setWorkoutDate('');
          setWorkoutDur('');
          setWorkoutDesc('');
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
    
    else {
      Swal.fire({
        icon: 'error',
        title: 'Fields are Required',
        text: 'Please provide data for all required fields.',
        showConfirmButton: false,
        timer: 1500,
      });
    }
      };

    return(
        <div className="workout">
            <div className="workout-container">
              <div className="workout-section">
                  <div className='heading-back-close'>
                      <div >
                          <ArrowBackIcon onClick={() => navigate("/user/workoutsplan")} />
                        </div>
                        <div className="workout-section-title"> 
                          <h2>Add Workouts</h2>
                        </div> 
                        <div >
                            <CloseIcon onClick={() => navigate("/user/workoutsplan")} />
                        </div>
                  </div>
                        

          <form onSubmit={handleAddWorkout}>
            <div className="workout-form-group">
              <div className="workout-input-container">
                <input
                  type="date"
                  placeholder="Enter Workout Date"
                  className="input-icon"
                  value={workoutDate}
                  onChange={(e) => setWorkoutDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="workout-form-group">
              <div className="workout-input-container">
                <div className='timer-icon'>
                <TimerIcon/> 
                </div>
                <input
                  
                  type="number"
                  placeholder="Enter Workout Duration"
                  className="input-icon"
                  value={workoutDur}
                  onChange={(e) => setWorkoutDur(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="workout-form-group">
              <div className="workout-input-container">
                <div className='descrp-icon'>
                <DescriptionIcon/>
                </div>
                <textarea
                  placeholder="Enter workout Description"
                  className="input-icon"
                  value={workoutDesc}
                  onChange={(e) => setWorkoutDesc(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <div className="workout-form-group">
              <label className='label'>Status:</label>
              <div className="workout-input-container">
                <select value={status} type="text"
                onChange={(e)=> setStatus(e.target.value)} required>
                  <option value=''>choose from here</option>
                  <option value='Not completed'>Not completed</option>
                  <option value='completed'>completed</option>
                </select>
            </div>
            </div>

            <div className="registration-form">
              <button type="submit" className="add-workout-button">
                Add Workout
              </button>
              <button className="next-button" onClick={() => navigate("/user/addexercises")}>Next
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    )
}

export default Addworkouts