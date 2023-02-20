import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Global.style";

export const NavTopStyled = styled.div`
    position: fixed;
    top:0px;
    padding:20px; 
    background-color: white;
    display:flex;
    justify-content: space-around;
    width:100%;
    height: 80px;
    align-items: center;
`

export const Logo = styled(Link)`
    font-family: 'Allura', cursive;
    color: ${theme.red};
    font-size: 2rem;
    margin-right: auto;
`

export const UserDiv = styled.div`
    margin-left: auto;
`

