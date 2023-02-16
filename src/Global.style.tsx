import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  green: '#46CC8D', 
  background: 'rgba(176, 231, 201, 0.11)', 
  red: '#FB2B3A',
  gray: '#B7B7B7',  
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
  overflow: hidden;
  font-family: 'Manjari', sans-serif;
}
`
