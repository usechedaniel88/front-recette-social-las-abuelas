import styled from "styled-components";
import { theme } from "../../Global.style";


export const RecipeContainer = styled.div`
    width: calc(50% - 20px);
    background-color: white;
    border-radius: 20px;
    padding: 17px 14px 7px;
    margin: 10px;
`
export const RecipeInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3px;
`
export const ViewsContainer = styled.div`
    border-radius: 20px;
    width: 50%;
    background-color: ${theme.lightBlueBackground};
`
export const StarContainer = styled.div`
    border-radius: 20px;
    padding: 1px 2px;
    width: 50%;
    border-radius: 20px;
    border: 3px solid #46CC8D;
`

export const RecipeAutor = styled.p`
    color: ${theme.GrayText};
    font-size: 0.875rem;
`

export const RecipeDetails = styled.span`
    color: ${theme.GrayText};
    font-size: 0.75rem;
    padding: 15px;
`
export const StarImage = styled.img`
width:20px;
 height:20px;
`
