import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Box } from '@mui/material';
import axios from 'axios';
import base_url from '../api/Bootapi';
import {Link} from 'react-router-dom';
const SignUp = () => {

  const [users, setUsers] = useState('')

  const handleForm=(e)=>{
    postDatatoServer(users);
    e.preventDefault();
  }
  const postDatatoServer=(data)=>{
    axios.post(`${base_url}/users`,data).then(
      (response)=>{
        console.log("success");
      },
      (error)=>{
        console.log(error);
        console.log("error");
      }
    );
  };
  const handleInput=(e)=>{
    setUsers(prev=>({...prev,[e.target.name]:[e.target.value]}))
}

  return (
    <div className='Maincontainer-signup' >
       <Box  sx={{width: 500,height: 300,padding:9}}>
       <h2><center>Sign-Up</center></h2>
      <Form onSubmit={handleForm}>
      <FormGroup>
          <Label for="name"><strong>User Id</strong></Label>
          <Input type="text" name="userid" id="userid" placeholder="enter user id" onChange={handleInput}/>
        </FormGroup>
      <FormGroup>
          <Label for="name"><strong>Name</strong></Label>
          <Input type="text" name="name" id="name" placeholder="enter name" onChange={handleInput}/>
        </FormGroup>
        <FormGroup>
          <Label for="Email"><strong>Email</strong></Label>
          <Input type="email" name="email" id="Email" placeholder="enter email id" onChange={handleInput}/>
        </FormGroup>
        <FormGroup>
          <Label for="Password"><strong>Password</strong></Label>
          <Input type="password" name="password" id="Password" placeholder="enter password" onChange={handleInput}/>
        </FormGroup>
        <FormGroup>
          <Label for="Height"><strong>Height</strong></Label>
          <Input type="text" name="height" id="height" placeholder="enter height " onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label for="weight"><strong>Weight</strong></Label>
          <Input type="text" name="weight" id="weight" placeholder="enter weight" onChange={handleInput}/>
        </FormGroup>
        <FormGroup>
          <Label for="Age"><strong>Age</strong></Label>
          <Input type="text" name="age" id="age" placeholder="enter age" onChange={handleInput}/>
        </FormGroup>
        <label class="form-check-label" for="flexRadioDefault1"><strong>Gender</strong>  </label><br/>
        <div class="form-check">
          <div >
        <input class="form-check-input" type="radio" name="gender" id="gender" value="Male" onChange={handleInput}/>
        <label class="form-check-label" for="flexRadioDefault1"> Male </label><br/>
        <input class="form-check-input" type="radio" name="gender" id="gender" value="Female" onChange={handleInput}/>
        <label class="form-check-label" for="flexRadioDefault2"> Female</label>
        </div>
      </div><br/>
      <div><Button type="submit" className='button-sign' >Submit</Button>
      <Link to='/'><Button type="submit" className='button-sign'  >Login  </Button></Link>
      </div>
      
      </Form>
      </Box>
      
      
    </div>
  )
}

export default SignUp
