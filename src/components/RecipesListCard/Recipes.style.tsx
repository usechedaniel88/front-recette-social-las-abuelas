import styled from "styled-components";
import { theme } from "../../Global.style";

export const Card = styled.div`
    background-color: white;
    border-radius: 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`

export const BlueDiv = styled.div`
    height: 35px; 
    width: 85px; 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: ${theme.lightBlueBackground};
    gap: 5px;
`

export const RecipeActionButtonStyled = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 20px;
    color: ${theme.GrayText};
    text-align: center;
    border: ${theme.lightRed} solid 1px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    gap:5px;
`

export const GreenOutlineDiv = styled(BlueDiv)`
    background-color: white;
    border: 1px solid ${theme.green};

    img{
            height: 25px;
        }
`

export const GrayDiv = styled(BlueDiv)`
    background-color: ${theme.gray};

    img{
            height: 25px;
        }
`
export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
`