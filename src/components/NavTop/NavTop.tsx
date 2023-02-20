import { Link } from 'react-router-dom'
import NavIcon from '../NavIcon/NavIcon'
import User from '../../assets/icons/user-gray.png'
import UserGreen from '../../assets/icons/user-green.png'
import { Logo, NavTopStyled } from './navTop.style'

type Props = {}

const NavTop = (props: Props) => {
  return (
    <NavTopStyled>
        <Logo to="/home-social">La Recette Social</Logo>
        <Link to="/login"><NavIcon img={User} text={'User'}></NavIcon></Link>
        {/* <Link to="/profile"><NavIcon img={UserGreen} text={'Username'}></NavIcon></Link> */}
    </NavTopStyled>
  )
}

export default NavTop