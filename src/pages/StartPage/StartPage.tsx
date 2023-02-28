import {Container, DivButton, H1Text, H2Text, VideoBg, StyledLink} from './startPage.style'
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
  )
}

export default HomePage