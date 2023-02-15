import { Link } from 'react-router-dom'

type Props = {}

const ProfileButtons = (props: Props) => {
  return (
    <div>
        <Link to="/my-recipes">My recipes</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/shopping-list">Shopping list</Link>
    </div>
  )
}

export default ProfileButtons