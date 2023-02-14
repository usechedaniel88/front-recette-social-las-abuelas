import React from 'react'
import MenuTop from '../components/MenuTop'
import MenuBottom from '../components/MenuBottom'

type Props = {}

const FavoritesPage = (props: Props) => {
  return (
    <div>
        <MenuTop/>
        <h1>Favorites Page</h1>
        <h2>"Aqui van mis Favoritas"</h2>
        <h2>"Aqui van mis Favoritas"</h2>
        <h2>"Aqui van mis Favoritas"</h2>
        <MenuBottom/>
    </div>
  )
}

export default FavoritesPage