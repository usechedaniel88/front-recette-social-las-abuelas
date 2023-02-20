import React from 'react'
import { SmallGrayText } from '../../Global.style'
import { IconDiv, IconImg } from './NavIcon.style'

type Props = {
    img: string, 
    text:string
}
export const NavIcon = (props : Props) => {
  return (
    <IconDiv>
        <IconImg src={props.img} alt="" />
        <SmallGrayText> { props.text }</SmallGrayText>
    </IconDiv>
  )
}

export default NavIcon