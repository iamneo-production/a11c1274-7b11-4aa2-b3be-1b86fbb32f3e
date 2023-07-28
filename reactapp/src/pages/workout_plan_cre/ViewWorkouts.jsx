import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../global/Sidebar';
import '../../index.css';
import { getWorkout,deleteWorkoutById } from '../../services/user-service';
// import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './viewexercises.css';

const Viewworkouts = () => {

  const navigate = useNavigate()
    const [workoutList, setWorkoutList] = useState([]);

    useEffect(() => {
        const dataString = localStorage.getItem('data');
        const data = JSON.parse(dataString);
        const userdto = data.userdto;

    // get data from backend
    getWorkout(userdto.id).then((res) => {
        setWorkoutList(res);
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });

}, []);

const handelupdate = (id) => {
    navigate(`/user/update-workout/${id}`);
}

const handleDelete = (id)=>{
    deleteWorkoutById(id)
    .then((data)=>{
        setWorkoutList((prevWorkoutData) =>
        prevWorkoutData.filter((workout) => workout.workoutId !== id));
        Swal.fire({
          icon: "success",
          title: "deleted Successful",
          text: "goal is deleted successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
    });
}


  return (

    <div className="app">
      <Sidebar/>
      <main className='content'>
      <div>
      <div style={{ textAlign: 'center', padding: '20px', borderRadius: '10px' }}>
            <h2 style={{ color: '#333', fontSize: '36px' }}>View Workouts</h2>
          
      </div>
      <div className='track-workout-title'>
      </div>
      <div className='track-exercise-container' >
      <table className='styled-table'>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>Workout Id</th>
                    <th style={{textAlign:"center"}}>Date</th>
                    <th style={{textAlign:"center"}}>Duration</th>
                    <th style={{textAlign:"center"}}>Notes</th>
                    <th style={{textAlign:"center"}}>Status</th>
                    <th style={{textAlign:"center"}}>Actions</th>
                    
                </tr>
            </thead>
            <tbody>
                {workoutList.map((item)=>(
                    <tr key={item.workoutId}>
                        <td>{item.workoutId}</td>
                        <td>{item.date}</td>
                        
                        <td>{item.duration}</td>
                        <td>{item.notes}</td>
                        <td>{item.is_completed}</td>
                        <td>{item.Actions}
                            <div className='action-icons'>
                            <span onClick={()=>handelupdate(item.workoutId)}>edit</span>
                            <span  onClick={()=>handleDelete(item.workoutId)}>del</span>
                            </div>
                        </td>
                    </tr>
                ))}
            
            </tbody>
            
        </table>

      </div>
      
    </div>
      </main>
    </div>

  )
}

export default Viewworkouts
