import React, { useState, useEffect } from 'react';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../global/Sidebar';
import '../../index.css';
import { getExerciseByUserId,deleteExercise } from '../../services/user-service';
import './viewexercises.css';
import Swal from 'sweetalert2';

const ViewExercises = () => {
  const navigate = useNavigate();

  const [res, setExercList] = useState([]);
  useEffect(() => {
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    const userdto = data.userdto;
    getExerciseByUserId(userdto.id)
      .then((res) => {
        setExercList(res);
        console.log('response', res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("responses",res);

  const handleExerciseDelete=(id)=>{
    deleteExercise(id)
    .then((resp)=>{
      setExercList((prevExerciseData) =>
      prevExerciseData.filter((exercise) => exercise.exerciseId !== id)
      );
      Swal.fire({
        icon: "success",
        title: "deleted Successful",
        text: "goal is deleted successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    })
  }



  return (
    <div className='app'>
      <Sidebar />
      <main className='content'>
        <div className='track-exercise-title'>
            <h2>View Exercise</h2>
          </div>
          <div className='track-exercise-container' >
            <table className='styled-table'>
              <thead>
                <tr>
                  <th style={{ textAlign: 'center' }}>Exercise No</th>
                  <th style={{ textAlign: 'center' }}>Exercise Name</th>
                  <th style={{ textAlign: 'center' }}>Exercise Discription</th>
                  <th style={{ textAlign: 'center' }}>Status</th>

                  <th style={{ textAlign: 'center' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {res && res.map((item) => (
                  <tr key={item.exerciseId}>
                    <td>{item.exerciseId}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.is_completed}</td>
                    <td>
                      {item.Actions}
                      <div className='action-icons'>
                        <EditNoteOutlinedIcon onClick={() => navigate(`/user/update-exercise/${item.exerciseId}`)} />
                        <DeleteForeverIcon onClick={() => handleExerciseDelete(item.exerciseId)} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </main>
    </div>
  );
};

export default ViewExercises;
