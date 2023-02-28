import AddButton from '../../components/AddButton/AddButton'
import AddRecipeButton from '../../components/AddRecipeButton/AddRecipeButton'
import Recipes from '../../components/RecipesListCard/Recipes'
import { Container } from '../../Global.style'

type Props = {}

const RecipesPage = (props: Props) => {
  return (
    <Container>
        <AddRecipeButton/>
        <h1>Recipes Page</h1>
        <form action='/recipes' method='get'>
          <input type="search" placeholder='Find recipes by name' />
          <AddButton />
        </form>
        <Recipes />
    </Container>
  )
}

export default RecipesPage