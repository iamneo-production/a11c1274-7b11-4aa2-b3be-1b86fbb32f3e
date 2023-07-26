import React from 'react';
import './FullBody.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Pomodoro from './Pomodoro';

import squat1 from './images/squat1.gif';
import jog from './images/jog.gif';
import jumping from './images/jumping.gif';
import lunges from './images/lunges.gif';
import moutain from './images/moutain.gif';
import plank from './images/plank.jpg';
import pushup from './images/pushup.gif';
import twist from './images/twist.gif';
import burpees from './images/burpees.gif';
import bicycle from './images/bicycle.gif';

const FullBody = () => {

  const mystyle={
    textDecoration:'underline',
    margin:'10px 10px 0px 100px'
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
       <div className='heading'>
       <h1 style={mystyle}>Full Body Workouts</h1> 
       </div>
    <div className='fullbody'>
    

      <div className='box'>
      <img src={squat1} alt={'squat'} className="image" />
        <h3>1.Squat</h3>
        
        <p>2 sets of 10 reps</p>
        

      </div>

      <div className='box'>
      <img src={jumping} alt={'jumping'} className="image" />
        <h3>2.Jumping Jack</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={lunges} alt={'lunges'} className="image" />
        <h3>3.Lunges</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={burpees} alt={'burpees'} className="image" />
        <h3>4.Burpees</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={moutain} alt={'moutain climbers'} className="image" />
        <h3>5.Mountain Climbers</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={twist} alt={'Russian Twist'} className="image" />
        <h3>6.Russian Twist</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={pushup} alt={'Push-ups'} className="image" />
        <h3>7.Push-ups</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={jog} alt={'Spot Jogging'} className="image" />
        <h3>8.Spot Jogging</h3>
        <p>60 Seconds</p>
      </div>

      <div className='box'>
      <img src={bicycle} alt={'Bicycle crunches'} className="image" />
        <h3>9.Bicycle Crunches</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={plank} alt={'Plank'} className="image" />
        <h3>10.Plank</h3>
        <p>60 seconds</p>
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

export default FullBody
