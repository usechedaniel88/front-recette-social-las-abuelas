import ProfileButtons from '../../components/ProfileButtons/ProfileButtons'

type Props = {}

const ProfilePage = (props: Props) => {
  return (
    <div>
        <h1>Profile Page</h1>
        <h2>"Aqui va avatar y user name"</h2>
        <h2>"Aqui va Email"</h2>
        <h2>"Aqui va Badge"</h2>
        <ProfileButtons/>
    </div>
  )
}

export default ProfilePage