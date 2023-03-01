import AddButton from '../../components/AddButton/AddButton'
import AddRecipeButton from '../../components/AddRecipeButton/AddRecipeButton'
import Recipes from '../../components/RecipesListCard/Recipes'
import { Container } from '../../Global.style'
import { SearchBar } from './recipesPage.style'
import search from '../../assets/icons/Search.png'
type Props = {}

const RecipesPage = (props: Props) => {
  return (
    <Container>
        <form action='/recipes' method='get'>
          <SearchBar type="search" placeholder='Find recipes by name' />
          <AddButton />
        </form>
        <h1>What are we coocking today?</h1>
        <Recipes />
    </Container>
  )
}

export default RecipesPage