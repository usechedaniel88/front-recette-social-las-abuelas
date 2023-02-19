import {AddRecipeButton, RecipeActionButton, Spacer} from '../../components'
import { Container, GrayText, RowLeft, RowCentered, WhiteBackgroundDiv, XLGrayText, DarkText } from '../../Global.style'
import notFavorite from '../../assets/icons/not-favorite-red.png';
import favoriteRed from '../../assets/icons/favorite-red.png';
import star from '../../assets/icons/star-yellow.png';
import timer from '../../assets/icons/timer-gray.png';
import shoppingList from '../../assets/icons/shopping-list-red.png';
import comments from '../../assets/icons/comments-red.png'
import { BlueDiv, GrayDiv, GreenOutlineDiv, RecipeDetailGrayDiv, TagDiv } from './recipeDetailPage.style';

type Props = {}

const RecipeDetailPage = (props: Props) => {
  return (
    <Container>
      <WhiteBackgroundDiv>
        
        <h3>Vegan Brownies</h3>
        <GrayText>by Hel Aige</GrayText>
        
        <RowLeft>
          <TagDiv>Vegan</TagDiv>
          <TagDiv>Dessert</TagDiv>
        </RowLeft>
        
        <RowCentered>
          <BlueDiv>
            <XLGrayText>100</XLGrayText>
            <GrayText>views</GrayText>
          </BlueDiv>
          <GreenOutlineDiv>
            <img src={star} alt="" />
            <GrayText>3.5</GrayText>
          </GreenOutlineDiv>
          <GrayDiv>
            <img src={timer} alt="" />
            <GrayText>60 min</GrayText>
          </GrayDiv>
        </RowCentered>
        
        <Spacer size={10} axis='vertical' />
      
        <h4>Instructions:</h4>
        <GrayText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </GrayText>
        
        <Spacer size={20} axis='vertical' />

        <h4>Ingredients:</h4>
        <RecipeDetailGrayDiv>
          <DarkText>Flour</DarkText>
          <DarkText>100</DarkText>
          <DarkText>g</DarkText>
        </RecipeDetailGrayDiv>
        <RecipeDetailGrayDiv>
          <DarkText>Dark chocolate</DarkText>
          <DarkText>100</DarkText>
          <DarkText>g</DarkText>
        </RecipeDetailGrayDiv>
        <RecipeDetailGrayDiv>
          <DarkText>Sugar</DarkText>
          <DarkText>100</DarkText>
          <DarkText>g</DarkText>
        </RecipeDetailGrayDiv>
        <RecipeDetailGrayDiv>
          <DarkText>Vegetable oil</DarkText>
          <DarkText>100</DarkText>
          <DarkText>ml</DarkText>
        </RecipeDetailGrayDiv>

        <Spacer size={10} axis='vertical' />

        <RowCentered>
          <RecipeActionButton img={notFavorite} text='Save to favorites'/>
          {/* una vez tengamos el back para definir si la receta está o no en la lista de favoritos, habrá que añadir un ternario con la opción de la imagen del corazón rojo lleno*/}
          <RecipeActionButton img={shoppingList} text='Add to shopping list'/>
          <RecipeActionButton img={comments} text='Write a comment'/>
        </RowCentered>
      
      </WhiteBackgroundDiv>
    </Container>
  )
}

export default RecipeDetailPage