import styled from "styled-components";
import { theme } from "../../Global.style";



export const SearchBar = styled.input`
    height: 35px;
    width:250px;
    background-color: white;
    border-radius: 20px;
    border: none;
    color: ${theme.GrayText};
`
export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
`