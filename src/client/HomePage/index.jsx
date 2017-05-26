import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPageContentAsync } from '../_shared/app-shared-action-creators'
require('./style.scss')

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  homePage: PropTypes.string
}

class HomePage extends Component {
  componentDidMount () {
    this.props.dispatch(getPageContentAsync('homepage'))
  }

  render () {
    return (<div className='homepage__container'>
      <h2>Home Page</h2>
      <p>{this.props.homePage}</p>
    </div>)
  }
}

HomePage.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    homePage: state.app.pages.homepage
  }
}

export default connect(mapStateToProps)(HomePage)
