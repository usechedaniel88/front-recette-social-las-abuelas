import { Link } from "react-router-dom"
import styled from "styled-components"
import { GlobalStyles } from "../../Global.style"




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
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`
export const H1Text = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Allura:wght@100&display=swap');

font-family: 'Allura', cursive;
`
export const H2Text = styled.h2`
@import url('https://fonts.googleapis.com/css2?family=Manjari:wght@100;400;700&display=swap');

font-family: 'Manjari', sans-serif;
`

// export const Container = styled.div`
// height: 100vh;
// width: auto;
// `

// export const VideoBg = styled.video`
// width: 100%;
// height: 100%;
// object-fit: cover;
// position: absolute;
// z-index: -1;
// `

// export const StyledLink = styled(Link)`
// text-decoration: none;
// `
// export const DivButton = styled.div`
// background-color: #FB2B3A; 
// color: white;
// width: 95%;
// padding: 5%;
// border-radius: 15px;
// border: 5px solid white;
// position: relative;
// margin: 0 auto;
// text-align: center;
// z-index: 1;
// `
// export const ButtonH2 = styled.h2`
// font-family: 'Allura', cursive;
// color: white;
// `