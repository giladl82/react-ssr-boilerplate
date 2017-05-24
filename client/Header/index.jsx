import React from 'react'
require('./style.scss')

import Navbar from './navbar'

const Header = (props) => {
  return (
    <header>
      <h1 className='main__header'>React server side render boilerplate</h1>
      <Navbar />
    </header>
  )
}

export default Header
