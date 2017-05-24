import React from 'react'
import Navbar from './navbar'

require('./style.scss')

const Header = (props) => {
  return (
    <header>
      <h1 className='main__header'>React server side render boilerplate</h1>
      <Navbar />
    </header>
  )
}

export default Header
