import React from 'react'
import { Link } from 'react-router-dom'
import TickImage from '../../assets/icons/tick-white.png'
import { InputSubmit, PText } from './okButton.style'

type Props = {
    
    onClick: any
    
}

const OkButton = ({ onClick}: Props ) => {
  return ( 

   <InputSubmit type='submit' value='Submit!' onClick={onClick} />
    // <Link to={'/profile'}>
    // <ButtonContainer>
    //     <img src={TickImage} alt="Imagen ok" />
    //     <PText>{props.title}</PText>
    // </ButtonContainer>
    // </Link>
  )
}

export default OkButton