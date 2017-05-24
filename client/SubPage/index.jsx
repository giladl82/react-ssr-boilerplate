import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { getPageContentAsync } from '../_shared/app-shared-action-creators'

require('./style.scss')

const propTypes = {
  dispatch: PropTypes.func.isRequired
}

class SubPage1 extends Component {
  componentDidMount () {
    // this.props.dispatch(getPageContentAsync('homepage'))
  }

  render () {
    return (
      <div className='subpage1__container'>
        <h2>Sub Page Number 1</h2>
      </div>)
  }
}

SubPage1.propTypes = propTypes

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(SubPage1)
