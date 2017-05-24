import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'
import HomePage from '../HomePage'
import SubPage from '../SubPage'
import SubPage2 from '../SubPage2'


require('./style.scss')

class MasterPage extends Component {
  render () {
    return (<div className='main__container'>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/subpage' component={SubPage} />
        <Route path='/subpage2' component={SubPage2} />
      </Switch>
      <Footer />
    </div>)
  }
}

export default MasterPage
