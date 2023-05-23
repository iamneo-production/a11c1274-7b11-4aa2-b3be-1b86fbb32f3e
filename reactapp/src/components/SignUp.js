import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Box } from '@mui/material'

const SignUp = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [height,setHeight]= useState('')
  const [weight,setWeight]= useState('')




  return (
    <div >
     
       <Box  sx={{width: 500,height: 300,padding:9}}>
      <Form >
      <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="enter name" onChange={(e) => setName(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="Email" placeholder="enter email id" onChange={(e) => setEmail(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="Password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label for="Height">Height</Label>
          <Input type="text" name="height" id="height" placeholder="enter height" onChange={(e) => setHeight(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="weight">Weight</Label>
          <Input type="text" name="weight" id="weight" placeholder="enter weight" onChange={(e) => setWeight(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label for="Age">Age</Label>
          <Input type="text" name="age" id="age" placeholder="enter age" onChange={(e) => setAge(e.target.value)}/>
        </FormGroup>
        <label class="form-check-label" for="flexRadioDefault1"> Gender </label><br/>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1"> Male </label><br/>
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
        <label class="form-check-label" for="flexRadioDefault2"> Female</label>
      </div><br/>
      <Button outline color="primary" >Submit</Button>
      </Form>
      </Box>
      
    </div>
  )
}

export default SignUp
