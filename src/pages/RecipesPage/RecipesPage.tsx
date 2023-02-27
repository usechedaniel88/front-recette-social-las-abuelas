import AddRecipeButton from '../../components/AddRecipeButton/AddRecipeButton'
import Recipes from '../../components/Recipes'
import { Container } from '../../Global.style'

type Props = {}

const RecipesPage = (props: Props) => {
  return (
    <Container>
        <AddRecipeButton/>
        <h1>Recipes Page</h1>
        <h2>"Aqui va el buscador"</h2>
        <Recipes />
        <h3>"Aqui van las recetas"</h3>
        <h3>"Aqui van las recetas"</h3>
        <h3>"Aqui van las recetas"</h3>

    </Container>
  )
}

export default RecipesPage