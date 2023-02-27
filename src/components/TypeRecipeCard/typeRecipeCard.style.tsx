import styled from "styled-components";
import { theme } from "../../Global.style";


export const TypeRecipeContainer = styled.div`
width: 90px;
height: 90px;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #FFFFFF;
  border-radius: 20px;
  margin: 8px;
  padding-top: 14px;
`

export const TypeImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`

export const H5Type = styled.h5`
color: ${theme.GrayText};
`
