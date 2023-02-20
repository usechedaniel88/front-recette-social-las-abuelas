import React from 'react';
import RecipeForm from "../../components/RecipeForm";

type Props = {}

const RecipeFormPage = (props: Props) => {
  return (
    <div>
      <h1>Recipe Form Page</h1>
      <h2>"Aqui va Formulario Receta"</h2>
      <RecipeForm />
    </div>
  )
}

export default RecipeFormPage