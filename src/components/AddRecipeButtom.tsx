import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const AddRecipeButtom = (props: Props) => {
  return (
    <div>
        <Link to="/recipe-form">Add Recipe</Link>
    </div>
  )
}

export default AddRecipeButtom