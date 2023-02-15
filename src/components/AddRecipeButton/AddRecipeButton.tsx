import { Link } from 'react-router-dom'

type Props = {}

const AddRecipeButton = (props: Props) => {
  return (
    <div>
        <Link to="/recipe-form">Add Recipe</Link>
    </div>
  )
}

export default AddRecipeButton

