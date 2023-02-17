import {AddRecipeButton, RecipeActionRow} from '../../components'

type Props = {}

const RecipesPage = (props: Props) => {
  return (
    <div>
        <AddRecipeButton/>
        <h1>Recipes Page</h1>
        <h2>"Aqui va el buscador"</h2>
        <h3>"Aqui van las recetas"</h3>
        <h3>"Aqui van las recetas"</h3>
        <h3>"Aqui van las recetas"</h3>
        <RecipeActionRow></RecipeActionRow>
    </div>
  )
}

export default RecipesPage