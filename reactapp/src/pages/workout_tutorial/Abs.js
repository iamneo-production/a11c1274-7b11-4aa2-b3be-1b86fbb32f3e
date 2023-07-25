import React from 'react'
import { useNavigate } from 'react-router-dom';

import hardstyle from './images/hardstyle.gif';
import deadbug from './images/deadbug.gif';
import cannonball from './images/cannonball.webp';
import sidebend from './images/sidebend.gif';
import backsquat from './images/backsquat.gif';
import spriderman from './images/spiderman.gif';
import hanging from './images/hanging.jpg';
import circuit from './images/circuit.gif';
import bird from './images/bird.gif';
import reverseCrunch from './images/reverseCrunch.gif';
import './FullBody.css';

const Abs = () => {

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

      <h1 style={mystyle}>Abs Workouts</h1> 
    </div>
    <div className='fullbody'>
     

      <div className='box'>
      <img src={hardstyle} alt={'Hardstyle Plank'} className="image" />
        <h3>1.Hardstyle Plank</h3>
        
        <p>2 sets of 10 reps</p>
        

      </div>

      <div className='box'>
      <img src={deadbug} alt={'Dead Bug'} className="image" />
        <h3>2.Dead Bug</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={cannonball} alt={'Hallow Extension to Cannonball'} className="image" />
        <h3>3.Hallow Extension to Cannonball</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={backsquat} alt={'Barbell Back Squats'} className="image" />
        <h3>4.Barbell Back Squats</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={sidebend} alt={'Dumbell Side Bend'} className="image" />
        <h3>5.Dumbell Side Bend</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={spriderman} alt={'Spiderman Press-up'} className="image" />
        <h3>6.Spiderman Press-up</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={hanging} alt={'Hanging Leg Raise'} className="image" />
        <h3>7.Hanging Leg Raise'</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={circuit} alt={'Circuit Crunches'} className="image" />
        <h3>8.Circuit Crunches</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={bird} alt={'Bird-Dog Plank'} className="image" />
        <h3>9.Bird-Dog Plank</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={reverseCrunch} alt={'Revese Crunches'} className="image" />
        <h3>10.Revese Crunches</h3>
        <p>2 sets of 10 reps</p>
      </div>

    </div>
    
    </div>
  )
}

export default Abs
