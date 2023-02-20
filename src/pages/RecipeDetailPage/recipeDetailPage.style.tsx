import styled from "styled-components";
import { theme } from "../../Global.style";

export const TagDiv = styled.div`
  padding: 7px 20px 6px 20px; 
  background-color: ${theme.green};
  color: white; 
  font-weight: 400;
  object-fit: contain;
  border-radius: 20px;
`

export const BlueDiv = styled.div`
    height: 85px; 
    width: 85px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: ${theme.lightBlueBackground};
    gap: 5px
`

export const GreenOutlineDiv = styled(BlueDiv)`
    background-color: white;
    border: 1px solid ${theme.green}
`

export const GrayDiv = styled(BlueDiv)`
    background-color: ${theme.gray};
`

export const RecipeDetailGrayDiv = styled.div`
    display: flex;
    background-color: ${theme.gray};
    border-radius: 20px;
    margin: 10px auto;
    padding: 10px 20px;
    gap:7px;
`