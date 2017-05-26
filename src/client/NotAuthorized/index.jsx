import React from 'react'

require('./style.scss')

const propTypes = {
}

const defaultProps = {}

const NotAuthorized = () => (
  <div className='nomatch__container'>
    <h2>HA HA HA!!! You will never see my protected page</h2>
  </div>
)

NotAuthorized.propTypes = propTypes

NotAuthorized.defaultProps = defaultProps

export default NotAuthorized
