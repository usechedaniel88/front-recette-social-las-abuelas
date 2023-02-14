import React from 'react'
import MenuBottom from '../components/MenuBottom'
import MenuTop from '../components/MenuTop'

type Props = {}

const RecipeFormPage = (props: Props) => {
  return (
    <div>
      <MenuTop/>
      <h1>Recipe Form Page</h1>
      <h2>"Aqui va Formulario Receta"</h2>
      <MenuBottom/>
    </div>
  )
}

export default RecipeFormPage