import React from 'react'
import MenuBottom from '../components/MenuBottom'
import MenuTop from '../components/MenuTop'

type Props = {}

const ShoppingListPage = (props: Props) => {
  return (
    <div>
        <MenuTop/>
        <h1>Shopping List Page</h1>
        <h2>"Contenido"</h2>
        <MenuBottom/>
    </div>
  )
}

export default ShoppingListPage