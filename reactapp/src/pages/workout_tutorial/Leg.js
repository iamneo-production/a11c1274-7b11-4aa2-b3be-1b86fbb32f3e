import React from 'react'
import { useNavigate } from 'react-router-dom';

import squat1 from './images/squat1.gif';
import oblique from './images/oblique.gif';
import jumpingsquats  from './images/jumpingsquats.gif';
import sidelunge from './images/sidelunge.gif';
import glute from './images/glute.gif';
import pistol from './images/pistol.gif';
import singleleg from './images/singleleg.gif';
import split from './images/split.gif';
import stepup from './images/stepup.gif';
import crossover from './images/crossover.gif';
import './FullBody.css';


const Leg = () => {
  const mystyle={
    textDecoration:'underline',
    margin:'10px 10px 0px 80px'
  }
    const navigate=useNavigate();
  return (
    <div className='full'>
      <div className='full-back-btn'>
    <button onClick={()=>navigate('/user/tutorial')}>Back</button>
    </div>
    <div className='heading'>

      <h1 style={mystyle}>Leg Workouts</h1> 
    </div>
    <div className='fullbody'>
     

      <div className='box'>
      <img src={squat1} alt={'squat'} className="image" />
        <h3>1.Squat</h3>
        
        <p>2 sets of 10 reps</p>
        

      </div>

      <div className='box'>
      <img src={oblique} alt={'Oblique Crunches'} className="image" />
        <h3>2.Oblique Crunches</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={sidelunge} alt={'Side lunges'} className="image" />
        <h3>3.Side Lunges</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={glute} alt={'Glute Bridge'} className="image" />
        <h3>4.Glute Bridge</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={pistol} alt={'Pistol Squats'} className="image" />
        <h3>5.Pistol Squats</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={singleleg} alt={'Single Leg Deadlift'} className="image" />
        <h3>6.Single Leg Deadlift</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={split} alt={'Bulgarian Split Squats'} className="image" />
        <h3>7.Bulgarian Split Squats'</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={stepup} alt={'Step-ups'} className="image" />
        <h3>8.Step-ups</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={crossover} alt={'Step-up Crossover'} className="image" />
        <h3>9.Step-up Crossover</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={jumpingsquats} alt={'Jumping-Squats'} className="image" />
        <h3>10.Jumping-Squats</h3>
        <p>2 sets of 10 reps</p>
      </div>

    </div>
    
    </div>
  )
}

export default Leg
