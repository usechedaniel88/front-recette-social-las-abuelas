import { Link } from 'react-router-dom'
import NavIcon from '../NavIcon/NavIcon'
import User from '../../assets/icons/user-gray.png'
import UserGreen from '../../assets/icons/user-green.png'
import { Logo, NavTopStyled } from './navTop.style'

type Props = {loggedInUser:string}

const NavTop = (props: Props) => {
  const {loggedInUser} = props;
  return (
    <NavTopStyled>
     
      <Logo to="/home-social">La Recette Social</Logo>
      {!loggedInUser &&
        <Link to="/login"><NavIcon img={User} text={'Log in'}></NavIcon></Link>}
      {loggedInUser &&
        <Link to="/profile"><NavIcon img={User} text={'Profile'}></NavIcon></Link>}
        {/* <Link to="/profile"><NavIcon img={UserGreen} text={'Username'}></NavIcon></Link> */}
     
    </NavTopStyled>
  )
}

export default NavTop