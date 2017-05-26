import React from 'react'

require('./style.scss')

const propTypes = {
}

const defaultProps = {}

const Nomatch = () => (
  <div className='nomatch__container'>
    <h2><span className='nomatch__404'>404!</span> Page was not found</h2>
  </div>
)

Nomatch.propTypes = propTypes

Nomatch.defaultProps = defaultProps

export default Nomatch
