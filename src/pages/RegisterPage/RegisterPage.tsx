import OkButton from "../../components/OkButton/OkButton"
import { Container } from "../../Global.style"
import { FormContainer, LinkForgot, LinkRegister, LoginInput, TextLabel } from "../LoginPage/loginPage.style"

type Props = {}

const RegisterPage = (props: Props) => {
  return (
    <Container>
      <FormContainer>
      <TextLabel>Register:</TextLabel>
      <LoginInput type="text" name="username" placeholder="Username"/>
      <LoginInput type="mail" name="password" placeholder="Email"/>
      <LoginInput type="password" name="password" placeholder="Password"/>
      <OkButton title={'Log in!'}/>
    </FormContainer>
     </Container>
  )
}

export default RegisterPage