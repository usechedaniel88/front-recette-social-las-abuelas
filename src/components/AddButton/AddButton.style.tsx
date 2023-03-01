import styled from 'styled-components'
import { theme } from '../../Global.style'

export const AddBtn = styled.button`
    background-color: ${theme.green};
    border: none;
    border-radius: 20px;
    width: 160px;
    height: 35px;
    color: ${theme.lightBlueBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    
    img{
        height: 25px;
    }
`
