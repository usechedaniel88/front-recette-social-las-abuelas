import styled from "styled-components";
import { theme } from "../../Global.style";

export const BlueDiv = styled.div`
    height: 35px; 
    width: 85px; 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: ${theme.lightBlueBackground};
    gap: 5px;
`

export const GreenOutlineDiv = styled(BlueDiv)`
    background-color: white;
    border: 1px solid ${theme.green};
`

export const GrayDiv = styled(BlueDiv)`
    background-color: ${theme.gray};
`
export const Div = styled.div`
    display: flex;
    
`