import React from 'react'
import MenuBottom from '../components/MenuBottom'
import MenuTop from '../components/MenuTop'

type Props = {}

const StatisticPage = (props: Props) => {
  return (
    <div>
        <MenuTop/>
        <h1>Statistic Page</h1>
        <h2>"Contenido"</h2>
        <MenuBottom/>
    </div>
  )
}

export default StatisticPage