import styled from "styled-components";
import { theme } from "../../Global.style";


export const RecipeContainer = styled.div`
    background-color: white;
    border-radius: 20px;
    width: 50%;
    padding: 17px 14px 7px;
`
export const RecipeInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const RecipeDetailsContainer = styled.div`
    border-radius: 20px;
    padding: 1px 2px;
    width: 50%;
    background-color: ${props => props.backgroundC ? ${theme.lightBlueBackground} :""};
`

export const RecipeAutor = styled.p`
    color: ${theme.GrayText};
    font-size: 0.875rem;
`

export const RecipeDetails = styled.span`
    color: ${theme.GrayText};
    font-size: 0.75rem;
`

