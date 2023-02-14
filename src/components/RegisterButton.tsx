import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const RegisterButton = (props: Props) => {
  return (
    <div>
        <Link to="/register">REGISTER NOW!</Link>
    </div>
  )
}

export default RegisterButton