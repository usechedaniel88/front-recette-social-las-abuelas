import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const MenuTop = (props: Props) => {
  return (
    <div>
        <Link to="/">La Recette Social</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
    </div>
  )
}

export default MenuTop