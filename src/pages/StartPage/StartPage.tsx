import { Link } from 'react-router-dom'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
        <h1>Start Page</h1>
        <h2>"Aqui va el video"</h2>
        <Link to="/home-social">Bon appétit!</Link>
    </div>
  )
}

export default HomePage