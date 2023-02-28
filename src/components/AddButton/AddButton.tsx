import React from 'react'
import { AddBtn } from './AddButton.style'
import add from '../../assets/icons/add-white.png'
import { Link } from 'react-router-dom'

const AddButton = () => {
  return (
    <div>
      <Link to="/recipe-form">
        <AddBtn type='submit'>
            <img src={add} alt="" />
            <p>Add a new recipe</p>
        </AddBtn>
      </Link>
    </div>
  )
}

export default AddButton