
import star  from '../../assets/icons/star-yellow.png'
import { RecipeAutor, RecipeContainer, RecipeDetails, RecipeInfo, StarContainer, StarImage,  ViewsContainer } from './recipeCard.style'

type Props = {
  recipeName: string;
  by: string;
  views: number;
  califications: number;
}

const RecipeCard = (props: Props) => {
  return (
    <RecipeContainer>
        <h5>{props.recipeName}</h5>
        <RecipeAutor>by {props.by}</RecipeAutor>
        <RecipeInfo>
            <ViewsContainer>
                <RecipeDetails>{props.views} views</RecipeDetails>
            </ViewsContainer>
            <StarContainer>
            <StarImage src={star} alt='star'/>
            <RecipeDetails>{props.califications}</RecipeDetails>
            </StarContainer>
        </RecipeInfo>
        
    </RecipeContainer>
  )
}


export default RecipeCard