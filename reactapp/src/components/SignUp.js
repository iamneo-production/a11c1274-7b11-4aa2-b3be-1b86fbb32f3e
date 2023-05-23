import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Box } from '@mui/material'

const SignUp = () => {

  const [users, setUsers] = useState('')

  const handleForm=(e)=>{
    console.log(users);
    e.preventDefault();
  }
  return (
    <div >
       <Box  sx={{width: 500,height: 300,padding:9}}>
      <Form onSubmit={handleForm}>
      <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="enter name" onChange={(e) =>{ setUsers({...users,name:e.target.value }) }}/>
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="Email" placeholder="enter email id" onChange={(e) =>{ setUsers({...users,email:e.target.value }) }}/>
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="Password" placeholder="enter password" onChange={(e) =>{ setUsers({...users,password:e.target.value }) }}/>
        </FormGroup>
        <FormGroup>
          <Label for="Height">Height</Label>
          <Input type="text" name="height" id="height" placeholder="enter height" onChange={(e) =>{ setUsers({...users,height:e.target.value }) }} />
        </FormGroup>
        <FormGroup>
          <Label for="weight">Weight</Label>
          <Input type="text" name="weight" id="weight" placeholder="enter weight" onChange={(e) =>{ setUsers({...users,weight:e.target.value }) }}/>
        </FormGroup>
        <FormGroup>
          <Label for="Age">Age</Label>
          <Input type="text" name="age" id="age" placeholder="enter age" onChange={(e) =>{ setUsers({...users,age:e.target.value }) }}/>
        </FormGroup>
        <label class="form-check-label" for="flexRadioDefault1"> Gender </label><br/>
        <div class="form-check">
          <div >
        <input class="form-check-input" type="radio" name="gender" id="gender" value="Male" onChange={(e) =>{ setUsers({...users,gender:e.target.value }) }}/>
        <label class="form-check-label" for="flexRadioDefault1"> Male </label><br/>
        <input class="form-check-input" type="radio" name="gender" id="gender" value="Female" onChange={(e) =>{ setUsers({...users,gender:e.target.value }) }}/>
        <label class="form-check-label" for="flexRadioDefault2"> Female</label>
        </div>
      </div><br/>
      <Button type="submit" outline color="primary" >Submit</Button>
      </Form>
      </Box>
      
      
    </div>
  )
}

export default SignUp
