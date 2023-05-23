import React from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Box, Typography } from '@mui/material'
import {Link} from "react-router-dom";


const Login = () => {
 
  return (
    <div>
    <center> Login Page
      <Box  sx={{width: 300,height: 300}}>
      <Form inline >
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="Emailid" placeholder="Enter Email id" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="emailPassword" placeholder="Enter password " />
        </FormGroup>
      </Form>
        <div style ={{ width:'50px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
         <Button   outline color="primary" >Login</Button><br/>
        </div>
        </Box>
        </center>
        <div>

        </div>
      

        </div>
  )
}

export default Login
