import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Global.style";

export const RecipeActionButtonStyled = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 20px;
    color: ${theme.GrayText};
    text-align: center;
    border: ${theme.lightRed} solid 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap:5px;
`
