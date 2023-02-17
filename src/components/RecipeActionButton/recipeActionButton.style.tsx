import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Global.style";

export const RecipeActionButtonStyled = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 20px;
    color: ${theme.grayText};
    font-size: 0.75rem;
    text-align: center;
    border: red solid 1px;
    /* rgba(${theme.red}, 0.35) */
    display: flex;
    flex-direction: column;
    padding: 10px;
`
