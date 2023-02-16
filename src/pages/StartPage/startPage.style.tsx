import { Link } from "react-router-dom"
import styled from "styled-components"




export const VideoContainer = styled.html`
height: 100vh;
overflow: hidden;

width: auto;
position: absolute;
z-index: 1;
`
export const StyledLink = styled(Link)`

text-decoration: none;

`
export const DivButton = styled.div`

background-color: #FB2B3A; 
color: white;
width: 95%;
padding: 5%;
border-radius: 15px;
border: 5px solid white;
text-align: center;
margin: 0 auto;
bottom: 30%;
position: relative;
z-index: 1;
`
export const ButtonH2 = styled.h2`
font-family: 'Allura', cursive;
color: white;
`