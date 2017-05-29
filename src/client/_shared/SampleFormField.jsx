import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
}

const defaultProps = {}

const SampleFormField = (props) => {
  const { input, label, type, className, meta } = props

  return (
    <div className={meta.asyncValidating ? 'async-validating' : ''}>
      <label className={className + '__label'} htmlFor={name}>{label}</label>
      <input {...input} type={type} />
      {meta.touched &&
        ((meta.error && <span className={className + '__error'}>{meta.error}</span>) ||
          (meta.warning && <span className={className + '__wraning'}>{meta.warning}</span>))}
    </div>
  )
}

SampleFormField.propTypes = propTypes

SampleFormField.defaultProps = defaultProps

export default SampleFormField
