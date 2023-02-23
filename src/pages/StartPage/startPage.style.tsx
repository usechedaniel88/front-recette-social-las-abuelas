import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    height: 100vh;
    width: auto;
`
export const VideoBg = styled.video`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const StyledLink = styled(Link)`
text-decoration: none;
`

export const DivButton = styled.div`
    position: absolute;
    background-color: #FB2B3A;
    color: white;
    border: 5px solid white;
    border-radius: 15px;
    min-width: 300px;
    font-size: 15px;
    text-align: center;
    padding: 20px 0;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`
export const H1Text = styled.h1`
font-family: 'Allura', cursive;
font-size: 2rem;
color: white;
`
export const H2Text = styled.h2`
font-family: 'Manjari', sans-serif;
font-size: 2rem;
`
