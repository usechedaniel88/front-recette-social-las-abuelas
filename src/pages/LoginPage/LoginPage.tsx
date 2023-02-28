import { Link } from 'react-router-dom'
import OkButton from '../../components/OkButton/OkButton'
import { Container } from '../../Global.style'
import { FormContainer, LinkForgot, LinkRegister, LoginInput, TextLabel } from './loginPage.style'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <Container>
      <FormContainer>
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

export default LoginPage