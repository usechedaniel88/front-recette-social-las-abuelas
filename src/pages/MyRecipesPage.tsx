import React from 'react'
import MenuBottom from '../components/MenuBottom'
import MenuTop from '../components/MenuTop'

type Props = {}

const MyRecipesPage = (props: Props) => {
  return (
    <div>
        <MenuTop/>
        <h1>My Recipes Page</h1>
        <h2>"Aqui van mis recetas"</h2>
        <h2>"Aqui van mis recetas"</h2>
        <h2>"Aqui van mis recetas"</h2>
        <MenuBottom/>
    </div>
  )
}

export default MyRecipesPage