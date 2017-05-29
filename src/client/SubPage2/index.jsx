import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPageContentAsync } from '../_shared/app-shared-action-creators'

import SampleForm from './sample-form'

require('./style.scss')

const propTypes = {
  getPageContentAsync: PropTypes.func.isRequired,
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
    if (this.props.subpage2) return

    this.props.getPageContentAsync('subpage2')
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

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getPageContentAsync
  }, dispatch)
)

const mapStateToProps = (state) => {
  return {
    subpage2: state.app.pages.subpage2
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubPage2)
