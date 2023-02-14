import React from 'react'
import MenuBottom from '../components/MenuBottom'
import ProfileButtons from '../components/ProfileButtons'

type Props = {}

const ProfilePage = (props: Props) => {
  return (
    <div>
        <h1>Profile Page</h1>
        <h2>"Aqui va avatar y user name"</h2>
        <h2>"Aqui va Email"</h2>
        <h2>"Aqui va Badge"</h2>
        <ProfileButtons/>
        <MenuBottom/>
    </div>
  )
}

export default ProfilePage