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
     <Link style={{ textDecoration: 'none'}} to="/home-social"><NavIcon
img={Home}
text='home'
/></Link>
<Link style={{ textDecoration: 'none'}} to="/statistic"><NavIcon
img={Stats}
text='Statistic' 
/></Link>
<Link  style={{ textDecoration: 'none'}} to="/recipes"><NavIcon 
img={Recipes}
text='Recipes'/></Link> 
      
    </FooterNav>
  )
}
export default NavBottom