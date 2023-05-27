import React from 'react'
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded-2 w-25'>
      <form action="">
        <div className='mb-3'>
          <label htmlFor="email"><strong>Email</strong></label>
          <input type="email" placeholder='Enter Email' className='form-control rounded-3'/>
        </div>
        <div className='mb-3'>
          <label htmlFor="password"><strong>Password</strong></label>
          <input type="password" placeholder='Enter Password'  className='form-control rounded-3'/>
        </div>
        <button className='btn btn-success w-100 rounded-3'>Log in</button><br/>
        <p>forgot password?<Link>click me</Link></p>
        <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-3 text-decoration-none'>Create Account</Link>
      </form>
    </div>
  </div>
  )
}

export default Login