import React from 'react'
import { useNavigate } from 'react-router-dom'

import pushup from './images/pushup.gif';
import incline from './images/incline.gif';
import decline from './images/decline.gif';
import moutain from './images/moutain.gif';
import chestpress from './images/chestpress.gif';
import declinechest from './images/declinechest.gif';
import updownplank from './images/updownplank.gif';
import chestfly from './images/chestfly.gif';
import chestdip from './images/chestdip.gif';
import punches from './images/punches.gif';
import './FullBody.css';


const Chest = () => {
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

      <h1 style={mystyle}>Chest Workouts</h1> 
    </div>
    <div className='fullbody'>
     

      <div className='box'>
      <img src={pushup} alt={'Push-ups'} className="image" />
        <h3>1.Push-ups</h3>
        
        <p>2 sets of 10 reps</p>
        

      </div>

      <div className='box'>
      <img src={incline} alt={'Incline Push-ups'} className="image" />
        <h3>2.Incline Push-ups</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={decline} alt={'Decline Push-ups'} className="image" />
        <h3>3.Decline Push-ups</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={moutain} alt={'Mountain Climbers'} className="image" />
        <h3>4.Mountain Climbers</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={chestpress} alt={'Chest Press'} className="image" />
        <h3>5.Chest Press</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={declinechest} alt={'Decline Chest Press'} className="image" />
        <h3>6.Decline Chest Press</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={chestfly} alt={'Chest Fly'} className="image" />
        <h3>7.Chest Fly'</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={updownplank} alt={'Up and Down Plank'} className="image" />
        <h3>8.Up and Down Plank</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={chestdip} alt={'Chest Dip'} className="image" />
        <h3>9.Chest Dip</h3>
        <p>2 sets of 10 reps</p>
      </div>

      <div className='box'>
      <img src={punches} alt={'Dumbell Punches'} className="image" />
        <h3>10.Dumbell Punches</h3>
        <p>2 sets of 10 reps</p>
      </div>

    </div>
    
    </div>
  )
}

export default Chest
