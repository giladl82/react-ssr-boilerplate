import React from 'react'
import PropTypes from 'prop-types'

import Navbar from './navbar'

require('./style.scss')

const propTypes = {
  pathName: PropTypes.string.isRequired
}

const defaultProps = {}

const Header = (props) => {
  return (
    <header>
      <h1 className='main__header'>React server side render boilerplate</h1>
      <Navbar {...props} />
    </header>
  )
}

Header.propTypes = propTypes

Header.defaultProps = defaultProps

export default Header
