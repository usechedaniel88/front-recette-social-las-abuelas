import RegisterButton from '../../components/RegisterButton/RegisterButton'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div>
        <h1>Login Page</h1>
        <h2>"Aqui va el formulario de login"</h2>
        <p>If you are new to La Recette</p>
        <RegisterButton/>
    </div>
  )
}

export default LoginPage