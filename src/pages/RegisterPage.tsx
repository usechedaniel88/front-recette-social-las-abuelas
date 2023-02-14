import React from 'react'
import MenuTop from '../components/MenuTop'
import MenuBottom from '../components/MenuBottom'

type Props = {}

const RegisterPage = (props: Props) => {
  return (
    <div>
        <MenuTop/>
        <h1>Register Page</h1>
        <h2>"Aqui va el formulario de register"</h2>
        <MenuBottom/>
    </div>
  )
}

export default RegisterPage