import React from 'react';
import './Main.css';
import { useNavigate } from 'react-router-dom';



const Tutorial =()=>{
  const mystyle={
    margin:'10px 10px 0px 90px',
    
  }
 
   
   const navigate=useNavigate();

  return (
    <div >
      <div className='back'>
    <button style={{margin:'10px 10px 0px 40px'}} onClick={()=>navigate('/user/dashboard')}>Back To Dashboard</button>
    </div>
    <div className='heading'>
    <h1 style={mystyle}>Calculate</h1>
    </div>
    
    
    <div className="tutorial">
    
      <div  className="container2" >
        
          <h2>Body Mass Index</h2>
          <p><b>The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.</b></p>
          <div className='buttons'>
          
        <button onClick={()=> navigate('Bmi')}>Calculate</button> 
          
          </div>
          </div>
        
        <div className="container2" >
        
          <h2>Basal Metabolic Rate</h2>
          <p><b>The Basal metabolic rate measures the minimum amount of calories that your body needs to perform necessary functions.</b></p>
          <div className='buttons'>
          
        <button onClick={()=> navigate('Bmr')}>Calculate</button> 
          
          </div>
          </div>
          <div className="container2" >
          <h2>Body Fat Percentage</h2>
          <p><b>The Body fat percentage (BFP) is the percent of fat that makes up your total body weight.</b></p>
         
          <div className='buttons'>
          
          <button onClick={()=>navigate('Bfp') }>Calculate</button>
          
          </div>
          </div>
          <div className="container2" >
          <h2>Calorie Count</h2>
          <p><b>The Calorie Calculator can be used to estimate the number of calories a person needs to consume each day.</b></p>
          <div className='buttons'>
          
          <button onClick={()=>navigate('Cc')}>Calculate</button>
          
          </div>
          </div>
    </div>
    
    </div>
  );
};


export default Tutorial;
