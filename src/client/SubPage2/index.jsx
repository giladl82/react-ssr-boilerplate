import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPageContentAsync } from '../_shared/app-shared-action-creators'

import SampleForm from './sample-form'

require('./style.scss')

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  subpage2: PropTypes.string
}

const defaultProps = {}

class SubPage2 extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (formValues) {
    alert(JSON.stringify(formValues))
  }

  componentDidMount () {
    this.props.dispatch(getPageContentAsync('subpage2'))
  }

  render () {
    return (
      <div className='subpage2__container'>
        <h2>Sub Page Number 2</h2>
        <p>{this.props.subpage2}</p>
        <SampleForm onSubmit={this.handleSubmit} />
      </div>)
  }
}

SubPage2.propTypes = propTypes

SubPage2.defaultProps = defaultProps

const mapStateToProps = (state) => {
  return {
    subpage2: state.app.pages.subpage2
  }
}

export default connect(mapStateToProps)(SubPage2)
