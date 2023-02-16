import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import {VideoContainer, StyledLink, DivButton, ButtonH2} from './startPage.style'
import { GlobalStyles } from "../../Global.style"


type Props = {}

const HomePage = (props: Props) => {
  return (
    <VideoContainer className= " video">
        <ReactPlayer 
          url='videos/cocinando-11657.mp4'
          className='react-player'
          playing
          loop
          mute
          width='100%'
          height='100%'
        />
        <StyledLink to="/home-social">
        <DivButton>
          <ButtonH2>La Recette Social</ButtonH2>
          <h3>La Recette Social</h3>
        </DivButton>
        </StyledLink>   
    </VideoContainer>
  )
}

export default HomePage