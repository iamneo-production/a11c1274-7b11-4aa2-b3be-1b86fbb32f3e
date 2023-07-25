import React from 'react';
import './Tutorial.css';
import full from './images/full.jpg';
import belly from './images/belly.webp';
import Arm from './images/Arm.webp';
import leg from './images/leg.jpeg';
import abs from './images/abs.png';
import chest from './images/chest.webp';
import warmup from './images/warmup.jpg';
import { useNavigate } from 'react-router-dom';

const Tutorial =()=>{
  const mystyle={
    textDecoration:'underline',
    margin:'10px 10px 0px 90px'
  }
   
   const navigate=useNavigate();

  return (
    <div >
      <div className='back-to-tutorial'>
    <button style={{margin:'10px 10px 0px 50px'} }   onClick={()=>navigate('/user/dashboard')}>Back To Dashboard</button>
    </div>
    <div className='heading'>
    <h1 style={mystyle}>Workout Tutorials</h1>
    </div>
    <div className="tutorial1">
    
      {/* {containersData.map((data, index) => (key={index} */}
      <div className="container1" >
          <img src={warmup} alt={'Warm-Ups'} className="image" />
          <h2>Warm-Ups</h2>
          <div className='buttons'>
          
        <button onClick={()=> navigate('warm-ups')}>Start</button> 
          
          </div>
          </div>
        
        <div className="container1" >
          <img src={full} alt={'Full BOdy Workout'} className="image" />
          <h2>Full Body Workout</h2>
          <div className='buttons'>
          
        <button onClick={()=> navigate('full-body')}>Start</button> 
          
          </div>
          </div>
          <div className="container1" >
          <img src={belly} alt={'Reduce Belly Fat'} className="image" />
          <h2>Reduce Belly Fat</h2>
          <div className='buttons'>
          
          <button onClick={()=>navigate('belly-fat') }>Start</button>
          
          </div>
          </div>
          <div className="container1" >
          <img src={Arm} alt={'Arm Workout'} className="image" />
          <h2>Arm Workout</h2>
          <div className='buttons'>
          
          <button onClick={()=>navigate('arm-workout')}>Start</button>
          
          </div>
          </div>

          <div className="container1" >
          <img src={leg} alt={'Leg Workout'} className="image" />
          <h2>Leg Workout</h2>
          <div className='buttons'>
          
          <button onClick={()=>navigate('leg-workout')} >Start</button>
          
          </div>
          </div>

          <div className="container1" >
          <img src={abs} alt={'Abs Workout'} className="image" />
          <h2>Abs Workout</h2>
          <div className='buttons'>
          
          <button onClick={()=>navigate('abs-workout')}>Start</button>
          
          </div>
          </div>

          <div className="container1" >
          <img src={chest} alt={'Chest Workout'} className="image" />
          <h2>Chest Workout</h2>
          <div className='buttons'>
          
          <button onClick={()=>navigate('chest-workout')} >Start</button>
          
          </div>
        </div>
      {/* ))} */}
    </div >
    
    </div>
  );
};


export default Tutorial;
