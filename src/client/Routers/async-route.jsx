import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  loadingPromise: PropTypes.object.isRequired,
  propsToPass: PropTypes.object
}

const defaultProps = {}

class AsyncRoute extends Component {
  constructor (props) {
    super(props)
console.log(props)
    this.state = { isLoaded: false }
  }

  componentDidMount () {
    this.props.loadingPromise.then((module) => {
      this.component = module.default
      this.setState({ loaded: true })
    })
  }

  render () {
    if (this.state.loaded) {
      return <this.component {...this.props.propsToPass} />
    } else {
      return <h1>Loading</h1>
    }
  }
}

AsyncRoute.propTypes = propTypes

AsyncRoute.defaultProps = defaultProps

export default AsyncRoute
