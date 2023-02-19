import { SmallGrayText, SmallIcon } from "../../Global.style"
import { RecipeActionButtonStyled } from "./recipeActionButton.style"

type Props = {img: string, text: string}

const RecipeActionButton = (props: Props) => {
    return (
        <RecipeActionButtonStyled>
            <SmallIcon><img src={props.img} alt=""/></SmallIcon>
            <SmallGrayText>{props.text}</SmallGrayText>
        </RecipeActionButtonStyled>
    )
}

export default RecipeActionButton