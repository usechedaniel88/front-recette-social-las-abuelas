import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  green: '#46CC8D', 
  background: 'rgba(176, 231, 201, 0.30)', 
  red: '#FB2B3A',
  gray: '#F5F5F5', 
  GrayText: '#838383', 
  darkText: '#232323', 
  lightBlueBackground: '#EAF6FF', 
  lightRed: 'rgba(251, 43, 58, 0.30)'
}

export const GlobalStyles = createGlobalStyle`

  *{
    margin:0; 
    padding: 0; 
    box-sizing: border-box; 
    text-decoration: none;
  }

  body{
    background-color: ${theme.background};
    font-family: 'Manjari', sans-serif;
  }

  h1{
    font-size: 2.25rem;
    color: ${theme.red};
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  h3{
    font-size: 1.60rem;
    color: ${theme.darkText};
    font-weight: 400;
    margin-bottom: 0.60rem;
  }

  h4{
    font-size: 1.2rem; 
    color: ${theme.darkText};
    font-weight: 400;
    margin-bottom: 0.60rem;
  }

  h5{
    font-size: 1rem;
    color: ${theme.darkText};
    font-weight: 400;
    margin-bottom: 0.60rem;
  }
`

// -------------- GENERAL CONTAINER STYLES ---------------

export const Container = styled.div`
  display:flex; 
  flex-direction: column;
  width:90vw;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
`
export const WhiteBackgroundDiv = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
`

export const RowLeft = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px 0;
  
`

export const RowCentered = styled(RowLeft)`
  justify-content:center; 
  justify-content: space-between;
`

/* ---------- GENERAL ICON STYLES --------------- */
export const SmallIcon = styled.div`
  width:40px; 
  height: 40px;
`

/* ------------------ GENERAL TEXT STYLES -------------------*/

export const GrayText = styled.p`
  color: ${theme.GrayText}; 
  line-height: 140%;
`

export const SmallGrayText = styled(GrayText)`
  font-size: 0.80rem;
  line-height: 100%
`

export const XLGrayText = styled(GrayText)`
  font-size: 1.5rem; 
`

export const DarkText = styled.p`
  color: ${theme.darkText};
`

