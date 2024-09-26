import React from 'react'
import { Button, Col, Container, Form, InputGroup } from 'react-bootstrap';
import { useState } from 'react';

function Login() {

  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: ""
  })

  const submitLoginForm = () => {
    console.log(loginDetails, "LOGIN_FORM")
  }
  
  return (
    <Container>
    <Col lg>
      <InputGroup>
        <InputGroup.Text>Enter User Name</InputGroup.Text>
        <Form.Control type='text' value={loginDetails.userName} onChange={(e) => {
          e.preventDefault()
          setLoginDetails({...loginDetails, userName: e.target.value})
        }}>
        </Form.Control>
        <InputGroup.Text>Enter Password</InputGroup.Text>
        <Form.Control type="password" value={loginDetails.password} onChange={(e) => {
          e.preventDefault()
          setLoginDetails({...loginDetails, password: e.target.value})
        }}></Form.Control>
        <Button onClick={() => submitLoginForm()}>Submit</Button>
      </InputGroup>
    </Col>
  </Container>
  )
}

export default Login