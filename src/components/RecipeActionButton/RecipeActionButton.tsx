import { RecipeActionButtonStyled } from "./recipeActionButton.style"

type Props = {img: string, text: string}

const RecipeActionButton = (props: Props) => {
    return (
        <RecipeActionButtonStyled>
            <img src={props.img} alt=""/>
            <p>{props.text}</p>
        </RecipeActionButtonStyled>
    )
}

export default RecipeActionButton