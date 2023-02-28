import React, { FormEventHandler } from 'react'
import OkButton from '../../components/OkButton/OkButton';
import { Container } from '../../Global.style';
import { LoginPage } from '../../pages'
import { FormContainer, TextLabel, LoginInput, LinkForgot, LinkRegister } from '../../pages/LoginPage/loginPage.style';

type Props = {handleSubmit: FormEventHandler<HTMLFormElement>}

export const Login = (props: Props) => {
  const {handleSubmit} = props;
  return (
      <Container>
      <FormContainer onSubmit={handleSubmit}>
      <TextLabel>Login:</TextLabel>
      <LoginInput type="text" name="username" placeholder="Username"/>
      <LoginInput type="password" name="password" placeholder="Password"/>
      <LinkForgot to={""}>Forgot your password? </LinkForgot>
      <OkButton title={'Log in!'}/>
    </FormContainer>
    <p>Not a member yet?<LinkRegister to={'/register'}> Register now!</LinkRegister></p>
    </Container>
    
  )
}