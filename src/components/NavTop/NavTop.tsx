import { Link } from 'react-router-dom'

type Props = {}

const NavTop = (props: Props) => {
  return (
    <div>
        <Link to="/home-social">La Recette Social</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
    </div>
  )
}

export default NavTop