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

@import url('https://fonts.googleapis.com/css2?family=Manjari:wght@100;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Allura&family=Noto+Sans+KR&family=Poppins:wght@100&display=swap');
/* font-family: 'Allura', cursive; */

  *{
    margin:0; 
    padding: 0; 
    box-sizing: border-box; 
  }

  body{
    background-color: ${theme.background};
    font-family: 'Manjari', sans-serif;
  }

  h3{
    font-size: 1.60rem;;
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
`

export const XLGrayText = styled(GrayText)`
  font-size: 1.5rem; 
`

export const DarkText = styled.p`
  color: ${theme.darkText};
`

