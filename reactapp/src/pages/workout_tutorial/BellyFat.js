import React from 'react';
import './FullBody.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Pomodoro from './Pomodoro';
import legRaise from './images/legRaise.gif';
import reverseCrunch from './images/reverseCrunch.gif';
import bird from './images/bird.gif';
import flutter from './images/flutter.gif';
import kneetucks from './images/kneetucks.gif';
import toe from './images/toe.jpg';
import vups from './images/vups.gif';
import legin from './images/legin.gif';
import sideplank from './images/sideplank.gif';
import plank from './images/plank.jpg';
import './FullBody.css';


const BellyFat = () => {
  const [showTimer, setShowTimer] = useState(false);

  const handleTimerToggle = () => {
    setShowTimer(!showTimer);
  };

  const mystyle={
    margin:'10px 10px 10px 100px',
    textDecoration: 'underline'

  }
    const navigate=useNavigate();
    return (
      <div className='full'>
        <div className='full-back-btn'>
    <button onClick={()=>navigate('/user/tutorial')}>Back</button>
    </div>
        <div className='heading'>
         <h1 style={mystyle}>Workouts to Reduce Belly Fat</h1> 
         </div>
      <div className='fullbody'>
       
  
        <div className='box'>
        <img src={legRaise} alt={'legRaise'} className="image" />
          <h3>1.Leg Raise</h3>
          
          <p>2 sets of 10 reps</p>
          
  
        </div>
  
        <div className='box'>
        <img src={reverseCrunch} alt={'Reverse Crunches'} className="image" />
          <h3>2.Reverse Crunches</h3>
          <p>2 sets of 10 reps</p>
        </div>
  
        <div className='box'>
        <img src={bird} alt={'Bird Dog Crunches'} className="image" />
          <h3>3.Bird Dog Crunches</h3>
          <p>2 sets of 10 reps</p>
        </div>
  
        <div className='box'>
        <img src={flutter} alt={'Flutter Kicks'} className="image" />
          <h3>4.Flutter Kicks</h3>
          <p>2 sets of 10 reps</p>
        </div>
  
        <div className='box'>
        <img src={kneetucks} alt={'Knee Tucks'} className="image" />
          <h3>5.Knee Tucks</h3>
          <p>2 sets of 10 reps</p>
        </div>
  
        <div className='box'>
        <img src={toe} alt={'Standing Toe Touch'} className="image" />
          <h3>6.Standing Toe Touch</h3>
          <p>2 sets of 10 reps</p>
        </div>
  
        <div className='box'>
        <img src={sideplank} alt={'Side Plank'} className="image" />
          <h3>7.Side Plank</h3>
          <p>60 seconds sideplank</p>
        </div>
  
        <div className='box'>
        <img src={vups} alt={'V-ups'} className="image" />
          <h3>8.V-ups</h3>
          <p>2 sets of 10 reps</p>
        </div>
  
        <div className='box'>
        <img src={legin} alt={'Leg in and Leg out'} className="image" />
          <h3>9.Leg in and Leg out</h3>
          <p>2 sets of 10 reps</p>
        </div>
  
        <div className='box'>
        <img src={plank} alt={'Plank'} className="image" />
          <h3>10.Plank</h3>
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
  
  export default BellyFat