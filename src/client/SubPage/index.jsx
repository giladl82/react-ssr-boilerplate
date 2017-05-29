import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { getPageContentAsync } from '../_shared/app-shared-action-creators'

require('./style.scss')

const propTypes = {
  getPageContentAsync: PropTypes.func.isRequired,
  subpage: PropTypes.string
}

class SubPage1 extends Component {
  componentDidMount () {
    if (this.props.subpage) return

    this.props.getPageContentAsync('subpage')
  }

  render () {
    return (
      <div className='subpage1__container'>
        <h2>Sub Page Number 1</h2>
        <ReactCSSTransitionGroup
          component='div'
          transitionAppear
          transitionAppearTimeout={5000}
          transitionName='example'
          transitionEnter={false}
          transitionLeave={false}>
          <p key='1'>{this.props.subpage}</p>
        </ReactCSSTransitionGroup>
      </div >)
  }
}

SubPage1.propTypes = propTypes

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getPageContentAsync
  }, dispatch)
)

const mapStateToProps = (state) => {
  return {
    subpage: state.app.pages.subpage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubPage1)
