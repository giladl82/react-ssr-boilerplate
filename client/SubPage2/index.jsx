import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { getPageContentAsync } from '../_shared/app-shared-action-creators'

require('./style.scss')

const propTypes = {
  dispatch: PropTypes.func.isRequired
}

const defaultProps = {}

class SubPage2 extends Component {
  componentDidMount () {
    // this.props.dispatch(getPageContentAsync('subpage2'))
  }

  render () {
    return (
      <div className='subpage2__container'>
        <h2>Sub Page Number 2</h2>
      </div>)
  }
}

SubPage2.propTypes = propTypes

SubPage2.defaultProps = defaultProps

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(SubPage2)
