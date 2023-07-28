import React, { useState } from 'react';
import './Trackexercise.css';
import { getExercisesByWorkoutId,getCompletionByTotalExercises } from '../../services/user-service';
import Sidebar from '../../pages/global/Sidebar';
import Swal from 'sweetalert2';

const Trackexercise = () => {
  const [workoutId, setWorkoutId] = useState('');
  const [workoutData, setWorkoutData] = useState(null);
  const [completedExercises, setCompletedExercises] = useState({
    completedCount:"",
    totalCount:""
  });
  
 console.log("workoutData",workoutData);
 console.log(completedExercises,"completedexercise");


  const handleWorkoutIdChange = (e) => {
    setWorkoutId(e.target.value);
  };

  const renderExerciseDetails = () => {
    if (!workoutData || workoutData.length === 0) {
      return <p>No exercise details found.</p>;
    }
  
    return (
      <div>
        <h2>Exercise Details</h2>
        <table className="exercise-table">
          <thead>
            <tr>
              <th>Exercise Id</th>
              <th>Exercise Name</th>
              <th>Description</th>
              <th>Set</th>
              <th>Reps</th>
              <th>Weight</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {workoutData.map((exercise) =>
              exercise.sets.map((set) => (
                <tr
                  key={set.setId}
                  className={(exercise.is_completed==="completed") ? "completed-exercise" : ""}
                  title={(exercise.is_completed==="completed") ? "completed" : "Not completed"}
                >
                  <td>{exercise.exerciseId}</td>
                  <td>{exercise.name}</td>
                  <td>{exercise.description}</td>
                  <td>{set.setId}</td>
                  <td>{set.reps}</td>
                  <td>{set.weight}</td>
                  <td>{set.duration}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  };
  
  
  
  const handleShowExerciseDetails = (wid) => {
      const dataString = localStorage.getItem('data');
      const data = JSON.parse(dataString);
      const userdto = data.userdto;
      getExercisesByWorkoutId(userdto.id,wid).then((data) => {
        if(data){
          setWorkoutData(data);
        }else{
          Swal.fire({
            icon: "failure",
            title: "InCorrect WorkoutId",
            text: "WorkoutId does not exist or data not found",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      getCompletionByTotalExercises(wid).then((data)=>{
        console.log("count data",data);
        setCompletedExercises(data);
      })
  };



const renderCompletedExercises = () => {
  if (completedExercises.length === 0) {
    return null;
  }

  return (
    <div className="completed-exercises">
      
        <div
          key={workoutId}
          className="exercise-progress"
          title={`Completed: ${completedExercises.completedCount} | Not completed: ${
            completedExercises.totalCount - completedExercises.completedCount
          }`}
        >
          <p>  Workout ID: {workoutId}</p>
          <div className="exercise-progress-circle">
            <div className="meter">
              <div
                className="fill"
                style={{
                  width: `${(completedExercises.completedCount / completedExercises.totalCount) * 100}%`,
                }}
              ></div>
              <div className="exercise-progress-text">
                <div className="exercise-progress-count">
                  {completedExercises.completedCount}/{completedExercises.totalCount}
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

  
  return (

  <div style={{ display: 'flex' }}>
  <Sidebar/> 
  
  <div style={{ flexGrow: 1, padding: '20px' }}>
    <div className="exercise-tracking-page" >
      <h1>Exercise Tracking Page</h1>
      {renderCompletedExercises()}
      <div className="input-container">
        <label htmlFor="workoutId">Enter Workout ID:</label>
        <input
          id="workoutId"
          type="text"
          value={workoutId}
          onChange={handleWorkoutIdChange}
        />
        <button onClick={() => handleShowExerciseDetails(workoutId)}>Show Exercise Details</button>
      </div>
  
      {renderExerciseDetails()}
    </div>
    </div>
    </div>

  );
  
};

export default Trackexercise;