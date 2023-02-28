import React from 'react'
import { Link } from 'react-router-dom'
import TickImage from '../../assets/icons/tick-white.png'
import { ButtonContainer, PText } from './okButton.style'

type Props = {
    title: string
}

const OkButton = (props: Props) => {
  return (
    <Link to={'/profile'}>
    <ButtonContainer>
        <img src={TickImage} alt="Imagen ok" />
        <PText>{props.title}</PText>
    </ButtonContainer>
    </Link>
  )
}

export default OkButton