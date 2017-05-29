import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPageContentAsync } from '../_shared/app-shared-action-creators'
require('./style.scss')

const propTypes = {
  getPageContentAsync: PropTypes.func.isRequired,
  homePage: PropTypes.string
}

class HomePage extends Component {
  componentDidMount () {
    if (this.props.homePage) return
    this.props.getPageContentAsync('homepage')
  }

  shouldComponentUpdate (nextProps, nextState) {
    debugger
    return true
  }

  render () {
    return (<div className='homepage__container'>
      <h2>Home Page</h2>
      <p>{this.props.homePage}</p>
    </div>)
  }
}

HomePage.propTypes = propTypes

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getPageContentAsync
  }, dispatch)
)

const mapStateToProps = (state, ownProps) => {
  return {
    homePage: state.app.pages.homepage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
