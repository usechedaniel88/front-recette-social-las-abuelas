
import { H5Type, TypeImage, TypeRecipeContainer } from './typeRecipeCard.style'


type Props = {
    title: string;
    src: string;
}


const TypeRecipeCard = (props: Props) => {
  return (
    <TypeRecipeContainer>
        <TypeImage src={props.src} alt='gluten-free'/>
        <H5Type>{props.title}</H5Type>
    </TypeRecipeContainer>
  )
}

export default TypeRecipeCard