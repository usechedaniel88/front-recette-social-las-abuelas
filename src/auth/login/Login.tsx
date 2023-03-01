import axios from 'axios';
import React, { FormEventHandler, useState } from 'react'
import OkButton from '../../components/OkButton/OkButton';
import { Container } from '../../Global.style';
import { LoginPage } from '../../pages'
import { FormContainer, TextLabel, LoginInput, LinkForgot, LinkRegister } from '../../pages/LoginPage/loginPage.style';

type Props = {handleSubmit: FormEventHandler<HTMLFormElement>}

export const Login = (props: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = async (e:any) =>{
    e.preventDefault(); 
    const loginForm = {
      email: email, 
      password: password
    }
    try{ 
      console.log(loginForm)
               const result =   await axios.post('http://localhost:4000/api/v1/users/', {loginForm})
                 console.log(result)
                
              }
              catch(e){
                 console.log(e);
              }
              
          }
  
  
  return (
      <Container>
      <FormContainer>
      <TextLabel>Login:</TextLabel>
      <LoginInput type="text" name="email" placeholder="Email" onChange={ e => {setEmail(e.target.value)}}/>
      <LoginInput type="password" name="password" placeholder="Password" onChange={ e => {setPassword(e.target.value)}}/>
      <LinkForgot to={""}>Forgot your password? </LinkForgot>
      <OkButton onClick={submit} />
    </FormContainer>
    <p>Not a member yet?<LinkRegister to={'/register'}> Register now!</LinkRegister></p>
    </Container>
    
  )
  }