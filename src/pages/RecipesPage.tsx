import React from 'react'
import AddRecipeButtom from '../components/AddRecipeButtom'
import MenuBottom from '../components/MenuBottom'
import MenuTop from '../components/MenuTop'

type Props = {}

const RecipesPage = (props: Props) => {
  return (
    <div>
        <AddRecipeButtom/>
        <MenuTop/>
        <h1>Recipes Page</h1>
        <h2>"Aqui va el buscador"</h2>
        <h3>"Aqui van las recetas"</h3>
        <h3>"Aqui van las recetas"</h3>
        <h3>"Aqui van las recetas"</h3>
        <MenuBottom/>
    </div>
  )
}

export default RecipesPage