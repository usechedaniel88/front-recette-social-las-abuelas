import styled from "styled-components";
import { theme } from "../../Global.style";


export const ButtonContainer = styled.div`
min-width: 199px;
display: flex;
flex-direction: row;
align-items: center;
background-color: ${theme.red};
border-radius: 25px;
color: #FFFFFF;
padding: 6px 13px;
font-size: 20px;
margin-top: 43px;
`

export const PText = styled.p`
padding-left: 6px;
`