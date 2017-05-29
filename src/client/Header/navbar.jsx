import React from 'react'
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import classnames from 'classnames'

const propTypes = {}

const defaultProps = {}

const HeaderNav = (props) => {
  const links = [
    { to: { pathname: '/' }, label: 'header.homepage', classes: [] },
    { to: { pathname: '/subpage' }, label: 'header.subpage', classes: [] },
    { to: { pathname: '/subpage2' }, label: 'header.subpage2', classes: [] },
    { to: { pathname: '/popup', state: { modal: true } }, label: 'header.popup', classes: [] },
    { to: { pathname: '/protected' }, label: 'header.privateNo', classes: [] },
    { to: { pathname: '/protected/true' }, label: 'header.privateYes', classes: [] }
  ]

  return (
    <nav>
      <ul className='main__header__navbar'>
        {links.map((link) => {
          return (
            <li key={link.to.pathname}>
              <NavLink exact className={classnames([ ...link.classes ])} activeClassName='' to={{ ...link.to }}>
                <FormattedMessage id={link.label} />
              </NavLink>
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
