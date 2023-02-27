import styled from "styled-components";
import { theme } from "../Global.style";

export const Hh1 = styled.h1`
color: red;


`

export const Form = styled.form`
 width : 100%;


`


export const Input = styled.input`
    
    background-color: ${theme.gray};
    border-radius: 20px;
    margin-left:0px;
    width:100%;
    padding: 10px 20px;
    gap:7px;
    border: none;
    color: ${theme.GrayText}; 
  line-height: 140%;
`
export const  InputTextArea= styled.input`
width:100%;
height:200px;
background-color: ${theme.gray};
border-radius: 20px;
margin-left:0px;
width:100%;
padding: 10px 20px;
gap:7px;
border: none;
color: ${theme.GrayText}; 
line-height: 140%;3

`

export const  InputTime= styled.input`
width:40% !important;
background-color: ${theme.gray};
border-radius: 20px;
margin-left:0px;
width:100%;
padding: 10px 20px;
gap:7px;
border: none;
color: ${theme.GrayText}; 
line-height: 140%;
margin-right: 20px;

`

export const  InputQuantity= styled.input`
width:50% !important;
background-color: ${theme.gray};
border-radius: 20px;
margin-left:0px;
width:100%;
padding: 10px 20px;
gap:7px;
border: none;
color: ${theme.GrayText}; 
line-height: 140%;
margin-right: 20px;
 `
export const CheckBoxWrapper = styled.div`
  position: relative;
 
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const RowCenter = styled.div`
display:flex;
  justify-content:center; 
  margin: 10px;
  
`






  
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;