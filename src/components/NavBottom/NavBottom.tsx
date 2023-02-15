import { Link } from 'react-router-dom'

type Props = {}

const NavBottom = (props: Props) => {
  return (
    <div>
        <Link to="/home-social">Home</Link>
        <Link to="/statistic">Statistic</Link>
        <Link to="/recipes">Recipes</Link>
    </div>
  )
}

export default NavBottom