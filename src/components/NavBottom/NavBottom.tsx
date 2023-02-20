import { Link } from 'react-router-dom'
import { NavIcon } from '../NavIcon/NavIcon'
import Home from '../../assets/icons/home-gray.png'
import Stats from '../../assets/icons/statistic-gray.png'
import Recipes from '../../assets/icons/recipes-gray.png'
import { FooterNav } from './navBottom.style'


type Props = {}

const NavBottom = (props: Props) => {
  return (
    <FooterNav>
      
      <Link to="/home-social"><NavIcon img={Home} text='Home' /></Link>
      <Link to="/statistic"><NavIcon img={Stats} text='Statistic'/></Link>
      <Link to="/recipes"><NavIcon img={Recipes} text='Recipes'/></Link> 
      
    </FooterNav>
  )
}
export default NavBottom