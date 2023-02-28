import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Global.style";


export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
export const TextLabel = styled.label`
font-size: 22px;
`

export const LoginInput = styled.input`
background-color: #FFFFFF;
width: 80vw;
border-radius: 20px;
margin: 10px auto;
padding: 10px 20px;
border: 1px solid #FFFFFF;
font-size: 20px;
`
export const LinkForgot = styled(Link)`
text-decoration: underline;
color: black;
padding-top: 12px;
`

export const LinkRegister = styled(Link)`
color: ${theme.red};
`