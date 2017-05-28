import React from 'react'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'

const propTypes = {}

const defaultProps = {}

const HeaderNav = (props) => {
  const links = [
    { to: { pathname: '/' }, label: 'Home', classes: [] },
    { to: { pathname: '/subpage' }, label: 'Sub1', classes: [] },
    { to: { pathname: '/subpage2' }, label: 'Sub2', classes: [] },
    { to: { pathname: '/popup', state: { modal: true } }, label: 'popup', classes: [] },
    { to: { pathname: '/protected' }, label: 'Protected - NO', classes: [] },
    { to: { pathname: '/protected/true' }, label: 'Protected - YES', classes: [] }
  ]

  return (
    <nav>
      <ul className='main__header__navbar'>
        {links.map((link) => {
          return (
            <li key={link.to.pathname}>
              <NavLink exact className={classnames([ ...link.classes ])} activeClassName='is-active' to={{ ...link.to }}>{link.label}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

HeaderNav.propTypes = propTypes

HeaderNav.defaultProps = defaultProps

export default HeaderNav
