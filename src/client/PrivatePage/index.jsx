import React from 'react'

require('./style.scss')

const propTypes = {
}

const defaultProps = {}

const Nomatch = () => (
  <div className='privatepage__container'>
    <h2>SHHHHH! this is private</h2>
  </div>
)

Nomatch.propTypes = propTypes

Nomatch.defaultProps = defaultProps

export default Nomatch
