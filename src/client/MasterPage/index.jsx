import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import ProtectedRoute from '../Routers/protected-route'
import AsyncRoute from '../Routers/async-route'
import Header from '../Header'
import Footer from '../Footer'
// import HomePage from '../HomePage'
// import SubPage from '../SubPage'
// import SubPage2 from '../SubPage2'
// import NoMatch from '../NoMatch'
// import ModalPage from '../ModalPage'
import PrivatePage from '../PrivatePage'
// import NotAuthorized from '../NotAuthorized'

require('./style.scss')

const propTypes = {
  location: PropTypes.object
}

const defaultProps = {}

class MasterPage extends Component {
  componentWillUpdate(nextProps) {
    const { location } = this.props

    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = location
    }
  }

  render() {
    const { location } = this.props
    const isModal = !!(location.state && location.state.modal && this.previousLocation !== location)// not initial render

    return (<div className='main__container'>
      <Header pathName={location.pathname} />

      <Switch location={isModal ? this.previousLocation : location}>
        <Route exact path='/'
          component={(props) => <AsyncRoute propsToPass={props}
            loadingPromise={System.import('../HomePage') } />} />

        <Route path='/subpage'
          component={(props) => <AsyncRoute propsToPass={props}
            loadingPromise={System.import('../SubPage') } />} />

        <Route path='/subpage2'
          component={(props) => <AsyncRoute propsToPass={props}
            loadingPromise={System.import('../SubPage2') } />} />

        <Route path='/notauthorized'
          component={(props) => <AsyncRoute propsToPass={props}
            loadingPromise={System.import('../NotAuthorized') } />} />

        <ProtectedRoute path='/protected' notAuthorizedPath='/notauthorized' location={location} component={PrivatePage} />
        <Route component={(props) => <AsyncRoute loadingPromise={System.import('../NoMatch') } />} />
      </Switch>
      {isModal ? (<Route path='/popup'
        component={(props) => <AsyncRoute propsToPass={props}
          loadingPromise={System.import('../ModalPage') } />} />) : null}

      <Footer />
    </div>)
  }
}

MasterPage.propTypes = propTypes

MasterPage.defaultProps = defaultProps

export default withRouter(MasterPage)
