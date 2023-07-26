import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './FullBody.css';

import marching from './images/marching.gif';
import bicepsstretch from './images/bicepsstretch.gif';
import shoulder from './images/shoulder.gif';
import hipflexor from './images/hipflexor.gif';
import legstretch from './images/legstretch.gif';
import hipcircle from './images/hipcircle.gif';
import armcircle from './images/armcircle.gif';
import bentover from './images/bentover.gif';
import lungestwist from './images/lungestwist.gif';
import legswing from './images/legswing.gif';
import Pomodoro from './Pomodoro';
import './FullBody.css';

const Warmup = () => {

  const mystyle={
    textDecoration:'underline',
    margin:'10px 10px 0px 80px'
  }

  const [showTimer, setShowTimer] = useState(false);

  const handleTimerToggle = () => {
    setShowTimer(!showTimer);
  };
    const navigate=useNavigate();
  return (
    <div className='full'>
      <div className='full-back-btn'>
    <button onClick={()=>navigate('/user/tutorial')}>Back</button>
    </div>
      <h1 style={mystyle}>Warm-Ups</h1> 
    <div className='fullbody'>
     

      <div className='box'>
      <img src={marching} alt={'Marching'} className="image" />
        <h3>1.Marching</h3>
        
        <p>60 Seconds</p>
        

      </div>

      <div className='box'>
      <img src={bicepsstretch} alt={'Biceps Stretch'} className="image" />
        <h3>2.Biceps Stretch</h3>
        <p>60 Seconds</p>
      </div>

      <div className='box'>
      <img src={shoulder} alt={'Shoulder Rolls'} className="image" />
        <h3>3.Shoulder Rolls</h3>
        <p>60 Seconds</p>
      </div>

      <div className='box'>
      <img src={hipflexor} alt={'Hip Flexor Stretch'} className="image" />
        <h3>4.Hip Flexor Stretch</h3>
        <p>60 Seconds</p>
      </div>

      <div className='box'>
      <img src={legstretch} alt={'Leg Stretch'} className="image" />
        <h3>5.Leg Stretch</h3>
        <p>60 Seconds</p>
      </div>

      <div className='box'>
      <img src={hipcircle} alt={'Hip Circles'} className="image" />
        <h3>6.Hip Circles</h3>
        <p>60 Seconds</p>
      </div>

      <div className='box'>
      <img src={armcircle} alt={'Arm Circles'} className="image" />
        <h3>7.Arm Circles</h3>
        <p>60 Seconds</p>
      </div>

      <div className='box'>
      <img src={bentover} alt={'Body Bent Over'} className="image" />
        <h3>8.Body Bent Over</h3>
        <p>60 Seconds</p>
      </div>

      <div className='box'>
      <img src={lungestwist} alt={'Lunges Twists'} className="image" />
        <h3>9.Lunges Twists</h3>
        <p>60 Seconds</p>
      </div>

      <div className='box'>
      <img src={legswing} alt={'Leg Swing'} className="image" />
        <h3>10.Leg Swing</h3>
        <p>60 Seconds</p>
        
      </div>

    </div>
    <button className='btn2' onClick={handleTimerToggle}>Timer</button>
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

export default Warmup
