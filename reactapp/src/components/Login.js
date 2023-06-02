import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import validation from './LoginValidation';
import './Loginpage.css';
import { Button} from 'reactstrap';
const Login = () => {

  const [values,setValues]=useState({
    email:'',
    password:''
  })
  const [errors,setErrors]=useState({})
  const handleInput=(e)=>{
      setValues(prev=>({...prev,[e.target.name]:[e.target.value]}))
  }
  const handlerSubmit=(e)=>{
    e.preventDefault();
    setErrors(validation(values));
  }
  return (
    <div >
    <div className='Maincontainer'>
      <h2>Sign-In</h2>
      <form action="" onSubmit={handlerSubmit}>
        <div >
          <label htmlFor="email"><strong>Email</strong></label>
          <input  type="email"  className='input-but' name='email' placeholder='Enter Email'  onChange={handleInput}/>
          {errors.email && <spam className='text-danger'> {errors.email} </spam>}
        </div>
        <br/>
        <div >
          <label htmlFor="password"><strong>Password</strong></label>
          <input className='input-but' type="password" name='password' placeholder='Enter Password' onChange={handleInput}/>
          {errors.password && <spam className='text-danger'> {errors.password} </spam>}
        </div>
       <br/>
       <div >
        <button type='submit' className='button'>Log in</button>
        <p>forgot password?<Link>click here</Link></p>
        <Link to="/signup"><Button type="submit" className='button'  >Create Account  </Button></Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login