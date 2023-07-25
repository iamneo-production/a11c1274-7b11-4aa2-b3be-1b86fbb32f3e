import React, { useState, useEffect } from 'react';
import Sidebar from '../global/Sidebar';
import './WorkoutHistory.css';
import { getCompletedWorkouts,deleteWorkoutById } from '../../services/user-service';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from "sweetalert2";

const WorkoutsPage = () => {
  const [workoutsData, setWorkoutsData] = useState([]);

  useEffect(() => {
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    const userdto = data.userdto;

    getCompletedWorkouts(userdto.id)
      .then((workouts) => {
        setWorkoutsData(workouts);
      })
      .catch((err) => {
        console.error('Error fetching completed workouts:', err);
      });
  }, []);



  const getStatusLabel = (isCompleted) => {
    return isCompleted ? 'Completed' : 'Incomplete';
  };


  const handleDeleteWorkouts=(id)=>{
    deleteWorkoutById(id)
    .then((response)=>{
      setWorkoutsData((workout) =>
      workout.filter((workouts) => workouts.workoutId !== id)
    );
    Swal.fire({
      icon: "success",
      title: "deleted Successful",
      text: "goal is deleted successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  });
  }

  const renderWorkouts = () => {
    return workoutsData.map((workout) => (
      <tr key={workout.workoutId}>
        <td>{workout.workoutId}</td>
        <td>{workout.date}</td>
        <td>{workout.duration} mins</td>
        <td>{workout.notes}</td>
        <td>{getStatusLabel(workout.is_completed)}</td>
        <td><button onClick={() => handleDeleteWorkouts(workout.workoutId)}>
              <DeleteIcon/>
            </button></td>
      </tr>
    ));
  };



  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px' }}>
        <div className="table-container">
          <h1>Workout History</h1>
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Date</th>
                <th>Duration</th>
                <th>Notes</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{renderWorkouts()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkoutsPage;
