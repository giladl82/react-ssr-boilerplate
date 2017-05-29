import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'

import ProtectedRoute from '../Routers/protected-route'
import AsyncRoute from '../Routers/async-route'
import Header from '../Header'
import Footer from '../Footer'
import PrivatePage from '../PrivatePage'

require('./style.scss')

const propTypes = {
  location: PropTypes.object,
  app: PropTypes.object
}

const defaultProps = {}

class MasterPage extends Component {
  componentWillUpdate (nextProps) {
    const { location } = this.props

    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = location
    }
  }

  render () {
    const { location, app } = this.props

    const isModal = !!(location.state && location.state.modal && this.previousLocation !== location)// not initial render

    return (
      <IntlProvider locale={app.locale} messages={app.messages}>
        <div className='main__container'>
          <Header pathName={location.pathname} />

          <Switch location={isModal ? this.previousLocation : location}>
            <Route exact path='/'
              component={(props) => <AsyncRoute propsToPass={props}
                loadingPromise={System.import('../HomePage')} />} />

            <Route path='/subpage'
              component={(props) => <AsyncRoute propsToPass={props}
                loadingPromise={System.import('../SubPage')} />} />

            <Route path='/subpage2'
              component={(props) => <AsyncRoute propsToPass={props}
                loadingPromise={System.import('../SubPage2')} />} />

            <Route path='/notauthorized'
              component={(props) => <AsyncRoute propsToPass={props}
                loadingPromise={System.import('../NotAuthorized')} />} />

            <ProtectedRoute path='/protected' notAuthorizedPath='/notauthorized' location={location} component={PrivatePage} />
            <Route component={(props) => <AsyncRoute loadingPromise={System.import('../NoMatch')} />} />
          </Switch>
          {isModal ? (<Route path='/popup'
            component={(props) => <AsyncRoute propsToPass={props}
              loadingPromise={System.import('../ModalPage')} />} />) : null}

          <Footer />
        </div>
      </IntlProvider>
    )
  }
}

MasterPage.propTypes = propTypes

MasterPage.defaultProps = defaultProps

const mapStateToProps = (state) => {
  return {
    app: state.app
  }
}

export default withRouter(connect(mapStateToProps)(MasterPage))
