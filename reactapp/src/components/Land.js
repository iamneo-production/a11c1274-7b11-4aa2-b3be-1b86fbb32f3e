import React from 'react'
import { useNavigate } from 'react-router-dom';
import './css/landpage.css';
import logoImage from './assets/projectlogo.jpg';

function Land() {

  const navigate = useNavigate();

  const handleLogin = () =>{
    return navigate('/login');
  }

  const handleSignUp = ()=>{
    return navigate('/signup');
  }

  const handleAdminSignUp = ()=>{
    return navigate('/AdminsignUp');
  }

  return (
    <div className='landing-page'>
      <nav className='navbar'>
        <div className='logo'>
          <img src={logoImage} alt='GetFitAbit'/>
        </div>
        <div className='nav-links'>
          <button onClick={handleLogin}>log in</button>
          <button onClick={handleSignUp}>Sign Up</button>
          {/* <button onClick={handleAdminSignUp}>Admin SignUp</button> */}
        </div>
      </nav>
      <div className='welcome-note'>
      <h1>Welcome To FitnessTracking Portal <br/> Please Login to Track 
      <br/> Achieve Repeat <br/> Goals.</h1>
      </div>
      
    </div>
  )
}

export default Land