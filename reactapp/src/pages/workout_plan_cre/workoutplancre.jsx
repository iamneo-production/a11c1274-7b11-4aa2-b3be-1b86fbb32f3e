import React from 'react';
import Sidebar from '../global/Sidebar';
import '../../index.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './workoutplancreator.css';
import AddIcon from '@mui/icons-material/Add';

const Workoutplancre = () => {
  const navigate = useNavigate();

  return (
    <div className="app">
      <Sidebar/>
      <main className='content'>
      <h1>Workout Plan Creator</h1>
        <div  style={{marginTop: "150px"}}>
            
            <div className="button-group">
            
            
                <Button  startIcon={<AddIcon/>} className='btn btn-workout' onClick={()=> navigate('/user/addworkouts')}>Add Workouts</Button> 
            
            
                <Button  startIcon={<AddIcon/>} className='btn btn-exercise' onClick={()=> navigate('/user/addexercises')}>Add Exercise</Button>
            
            
                <Button  startIcon={<AddIcon/>} className='btn btn-sets' onClick={()=> navigate('/user/addsets')}>Add sets</Button>
            </div>
            </div>
      </main> 
      
    </div>
  );
};

export default Workoutplancre;
