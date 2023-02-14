import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const MenuBottom = (props: Props) => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/statistic">Statistic</Link>
        <Link to="/recipes">Recipes</Link>
    </div>
  )
}

export default MenuBottom