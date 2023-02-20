import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Container, DivButton, H1Text, H2Text, VideoBg, StyledLink} from './startPage.style'
import { GlobalStyles } from "../../Global.style"
import video from '../../assets/videos/video.mp4'


type Props = {}

const HomePage = (props: Props) => {
  return (
  
  
    <Container>
    <VideoBg src={video} autoPlay loop></VideoBg>
    <StyledLink to="/home-social">
    <DivButton>
      <H1Text>La Recette Social</H1Text>
      <H2Text>Bon appétit!</H2Text>
    </DivButton>
    </StyledLink>
  </Container>



    // <Container>
    //   <VideoBg src={video} autoPlay/>
    //   <DivButton>
    // <ButtonH2>La Recette Social</ButtonH2>
    // <h3>La Recette Social</h3>
    // </DivButton>
    // </Container>
    
    // {/* <DivButton>
    /* <div>

    <StyledLink to="/home-social">
    <DivButton>
    <ButtonH2>La Recette Social</ButtonH2>
    <h3>La Recette Social</h3>
    </DivButton>
    </StyledLink>
    </div> */
    //   <h1>La Recette Social</h1>
    //   <StyledLink to="/home-social">Bon appétit!</StyledLink>
    // </DivButton> */}
    
    // <VideoContainer>
    //     <ReactPlayer 
    //       url='videos/video.mp4'
    //       className='react-player'
    //       playing
    //       loop
    //       mute
    //       width='100%'
    //       height='100%'
    //     />
    //     <StyledLink to="/home-social">
    //     <DivButton>
    //       <ButtonH2>La Recette Social</ButtonH2>
    //       <h3>La Recette Social</h3>
    //     </DivButton>
    //     </StyledLink>   
    // </VideoContainer>
  )
}

export default HomePage