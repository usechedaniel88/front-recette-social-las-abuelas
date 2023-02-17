import React from 'react';
import {RecipeActionButton} from '../../components';
import notFavorite from '../../assets/icons/not-favorite-red.png';
import favoriteRed from '../../assets/icons/favorite-red.png';
import shoppingList from '../../assets/icons/shopping-list-red.png';
import comments from '../../assets/icons/comments-red.png'
import { RecipeActionButtonRowStyle } from './recipeActionRow.style';

const RecipeActionRow = () => {
  return (
      <RecipeActionButtonRowStyle>
          <RecipeActionButton img={notFavorite} text='Save to favorites'/>
          {/* una vez tengamos el back para definir si la receta está o no en la lista de favoritos, habrá que añadir un ternario con la opción de la imagen del corazón rojo lleno*/}
          <RecipeActionButton img={shoppingList} text='Add to shopping list'/>
          <RecipeActionButton img={comments} text='Write a comment'/>
      </RecipeActionButtonRowStyle>
  )
}

export default RecipeActionRow