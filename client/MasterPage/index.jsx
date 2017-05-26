import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Header from '../Header'
import Footer from '../Footer'
import HomePage from '../HomePage'
import SubPage from '../SubPage'
import SubPage2 from '../SubPage2'
import NoMatch from '../NoMatch'
import ModalPage from '../ModalPage'

require('./style.scss')

const propTypes = {
  location: PropTypes.object
}

const defaultProps = {}

class MasterPage extends Component {
  componentWillUpdate (nextProps) {
    const { location } = this.props
    debugger
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = location
    }
  }

  render () {
    const { location } = this.props
    const isModal = !!(location.state && location.state.modal && this.previousLocation !== location)// not initial render
    console.log(isModal)
    return (<div className='main__container'>
      <Header pathName={location.pathname} />

      <Switch location={isModal ? this.previousLocation : location}>
        <Route exact path='/' component={HomePage} />
        <Route path='/subpage' component={SubPage} />
        <Route path='/subpage2' component={SubPage2} />
        <Route component={NoMatch} />
      </Switch>
      {isModal ? <Route path='/popup' component={ModalPage} /> : null}

      <Footer />
    </div>)
  }
}

MasterPage.propTypes = propTypes

MasterPage.defaultProps = defaultProps

export default withRouter(MasterPage)
