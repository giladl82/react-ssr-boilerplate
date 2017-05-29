import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { getPageContentAsync } from '../_shared/app-shared-action-creators'

require('./style.scss')

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  subpage: PropTypes.string
}

class SubPage1 extends Component {
  componentDidMount () {
    this.props.dispatch(getPageContentAsync('subpage'))
  }

  render () {
    return (
      <div className='subpage1__container'>
        <h2>Sub Page Number 1</h2>
        <ReactCSSTransitionGroup
          component='div'
          transitionName='example'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.props.subpage ? (<p>{this.props.subpage}</p>) : null}
        </ReactCSSTransitionGroup>
      </div >)
  }
}

SubPage1.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    subpage: state.app.pages.subpage
  }
}

export default connect(mapStateToProps)(SubPage1)
