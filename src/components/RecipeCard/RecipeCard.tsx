import React from 'react'
import star  from '../../assets/icons/star-yellow.png'
import { RecipeAutor, RecipeContainer, RecipeDetails, RecipeDetailsContainer, RecipeInfo } from './recipeCard.style'

type Props = {}

const RecipeCard = (props: Props) => {
  return (
    <RecipeContainer>
        <h5>Vegan brownies</h5>
        <RecipeAutor>by Hel Aige</RecipeAutor>
        <RecipeInfo>
            <RecipeDetailsContainer backgroundC= {true} />
                <RecipeDetails>100 views</RecipeDetails>
            </RecipeDetailsContainer>
            <RecipeDetailsContainer>
            <img src={star} alt='star'/>
            <RecipeDetails>3.5</RecipeDetails>
            </RecipeDetailsContainer>
        </RecipeInfo>
        
    </RecipeContainer>
  )
}


export default RecipeCard