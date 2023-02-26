import React from 'react'
import star  from '../../assets/icons/star-yellow.png'
import { RecipeAutor, RecipeContainer, RecipeDetails, RecipeInfo, StarContainer, ViewsContainer } from './recipeCard.style'

type Props = {}

const RecipeCard = (props: Props) => {
  return (
    <RecipeContainer>
        <h5>Vegan brownies</h5>
        <RecipeAutor>by Hel Aige</RecipeAutor>
        <RecipeInfo>
            <ViewsContainer>
                <RecipeDetails>100 views</RecipeDetails>
            </ViewsContainer>
            <StarContainer>
            <img src={star} alt='star' width='20px' height='20px'/>
            <RecipeDetails>3.5</RecipeDetails>
            </StarContainer>
        </RecipeInfo>
        
    </RecipeContainer>
  )
}


export default RecipeCard