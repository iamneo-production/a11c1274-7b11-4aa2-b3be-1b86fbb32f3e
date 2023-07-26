import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Pomodoro from './Pomodoro';
import pushup from './images/pushup.gif';
import dip from './images/dip.gif';
import sideplank from './images/sideplank.gif';
import inchworm from './images/inchworm.gif';
import curl from './images/curl.gif';
import tricepBack from './images/tricepBack.gif';
import swing from './images/swing.gif';
import rainbow from './images/rainbow.jpg';
import overhead from './images/overhead.gif';
import lateral from './images/lateral.gif';
import './FullBody.css';


const Arm = () => {
  const [showTimer, setShowTimer] = useState(false);

  const handleTimerToggle = () => {
    setShowTimer(!showTimer);
  };

    const mystyle={
      textDecoration:'underline',
      margin:'10px 10px 0px 100px'
    }

    const navigate=useNavigate();
  return (
    <div className='full'>
      <div className='full-back-btn'>
    <button onClick={()=>navigate('/user/tutorial')}>Back</button>
    </div>
    <div className='heading'>

      <h1 style={mystyle}>Arm Workouts</h1> 
    </div>
      <div className='fullbody'>
       
  
        <div className='box'>
        <img src={curl} alt={'Biceps Curls'} className="image" />
          <h3>1.Biceps Curls</h3>
          
          <p>2 sets of 10 reps</p>
          
  
        </div>
  
        <div className='box'>
        <img src={dip} alt={'Triceps Dip'} className="image" />
          <h3>2.Triceps Dip</h3>
          <p>2 sets of 10 reps</p>
        </div>
  
        <div className='box'>
        <img src={pushup} alt={'Push-ups'} className="image" />
          <h3>3.Push-ups</h3>
          <p>2 sets of 10 reps</p>
        </div>
  
        <div className='box'>
        <img src={inchworm} alt={'Inchworm'} className="image" />
          <h3>4.Inchworm</h3>
          <p>2 sets of 10 reps</p>
        </div>
  
        <div className='box'>
        <img src={lateral} alt={'Lateral Raise'} className="image" />
          <h3>5.Lateral Raise</h3>
          <p>2 sets of 10 reps</p>
        </div>
  
        <div className='box'>
        <img src={tricepBack} alt={'Triceps Kick Back'} className="image" />
          <h3>6.Triceps Kick Back</h3>
          <p>2 sets of 10 reps</p>
        </div>
  
        <div className='box'>
        <img src={swing} alt={'Kettebell Swing'} className="image" />
          <h3>7.Kettebell Swing</h3>
          <p>2 sets of 10 reps</p>
        </div>
  
        <div className='box'>
        <img src={rainbow} alt={'Rainbow Slam'} className="image" />
          <h3>8.Rainbow Slam</h3>
          <p>2 sets of 10 reps</p>
        </div>
  
        <div className='box'>
        <img src={overhead} alt={'Overhead Tricep Extension'} className="image" />
          <h3>9.Overhead Tricep Extension</h3>
          <p>2 sets of 10 reps</p>
        </div>
  
        <div className='box'>
        <img src={sideplank} alt={'Side Plank'} className="image" />
          <h3>10.Side Plank</h3>
          <p>60 second plank</p>
        </div>
  
      </div>
      <button  className='btn2' onClick={handleTimerToggle}>Timer</button>
        {showTimer && (
        <div className="timer-popup">
          <div className="timer-container">
            <Pomodoro onClose={handleTimerToggle} />
          </div>
        </div>
      )}
      
    </div>
  )
}

export default Arm
