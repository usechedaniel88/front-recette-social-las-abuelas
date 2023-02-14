import React from 'react'
import MenuBottom from '../components/MenuBottom'
import MenuTop from '../components/MenuTop'
import RegisterButton from '../components/RegisterButton'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div>
        <MenuTop/>
        <h1>Login Page</h1>
        <h2>"Aqui va el formulario de login"</h2>
        <p>If you are new to La Recette</p>
        <RegisterButton/>
        <MenuBottom/>
    </div>
  )
}

export default LoginPage