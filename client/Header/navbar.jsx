import React from 'react'
import {Link} from 'react-router-dom'
// import classnames from 'classnames'

const HeaderNav = (props) => {
  return (
    <nav>
      <ul className='main__header__navbar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/subpage'>Sub1</Link></li>
        <li><Link to='/subpage2'>Sub2</Link></li>
      </ul>
    </nav>
  )
}

export default HeaderNav
