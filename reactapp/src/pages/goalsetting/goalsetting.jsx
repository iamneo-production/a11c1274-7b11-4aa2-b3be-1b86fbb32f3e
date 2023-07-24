/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Sidebar from '../global/Sidebar'
import '../../index.css';
import {useNavigate}  from "react-router-dom";
import { useContext } from 'react';
import userContext from '../../context/userContext';
import { useEffect } from 'react';
import { getGoals,deleteGoalsById} from '../../services/user-service';
import { useState } from 'react';
import Swal from "sweetalert2";
import './goalsetting.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const goalsetting = () => {

  const [goalsData, setGoalsData] = useState([]);

  const navigate = useNavigate()
  const userData = useContext(userContext);
  console.log(userData);
  

  const handleAddGoals=() =>{
    navigate('/user/addgoals')
  }

  useEffect(() => {
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    const userdto = data.userdto;

    getGoals(userdto.id).then((data) => {
      setGoalsData(data);
    });
  }, []);

  console.log(goalsData);
    const handleEdit = (id)=>{
      navigate(`/user/editgoals/${id}`);
    }
  
    const handleDeleteGoals = (id) =>{
      deleteGoalsById(id)
      .then((response)=>{
        setGoalsData((prevGoalsData) =>
        prevGoalsData.filter((goal) => goal.goal_id !== id)
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
 
  


  return (
    <div className="app">
      
          <Sidebar/>
    <main className='content'>
      <div className='goals-container'> 
        <nav className='navbar'>
          <div><h3>Set your Goals</h3></div>
          <div><button onClick={handleAddGoals} className='btn-buttons'>Add Goals</button></div>
        </nav>
        <div className='table-details'>
          <table>
            <thead>
                <tr className='style-rows'>
                  <th>goalId</th>
                  <th>goalType</th>
                  <th>goalMetric</th>
                  <th>targetValue</th>
                  <th>timeFrame</th>
                  <th>additionalNotes</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                    {goalsData.map((eachGoal)=>(
                        <tr className='style-data' key={eachGoal.goal_id}>
                            <td>{eachGoal.goal_id}</td>
                            <td>{eachGoal.goalType}</td>
                            <td className='multiline-cell'>{eachGoal.goalMetric}</td>
                            <td>{eachGoal.targetValue}</td>
                            <td>{eachGoal.timeFrame}</td>
                            <td className='multiline-cell'>{eachGoal.additionalNotes}</td>
                            <td>{eachGoal.is_completed}</td>
                            <td className='actions'>
                              <button onClick={() => handleEdit(eachGoal.goal_id)}>
                              <EditIcon/>
                                </button>
                                <button onClick={() => handleDeleteGoals(eachGoal.goal_id)}>
                                <DeleteIcon/>
                                </button>
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

export default goalsetting
