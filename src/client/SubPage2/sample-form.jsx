import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { required, email, passwordStrengh, uniqueEmail } from '../../_shared/validations'

import SampleFormField from '../_shared/SampleFormField'

require('./style.scss')

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

const defaultProps = {}

const SampleForm = (props) => {
  const { handleSubmit } = props
  return (
    <div>
      <ul className='sample__form__instructions'>
        <li>Enter mail@mail.com to see async error</li>
        <li>
          Storng password
          <ul>
            <li>Min of 8 chars</li>
            <li>One or more Capital letters</li>
            <li>One or more small letters</li>
            <li>One or more number</li>
            <li>One or more special chars</li>
          </ul>
        </li>
      </ul>
      <form className='sample__form' onSubmit={handleSubmit}>
        <div>
          <Field
            name='firstName'
            type='text'
            className='sample__form'
            component={SampleFormField}
            label='First Name'
            validate={[ required ]}
          />
        </div>
        <div>
          <Field
            name='lastName'
            type='text'
            className='sample__form'
            component={SampleFormField}
            label='Last Name'
            validate={[ required ]}
          />
        </div>
        <div>
          <Field
            name='email'
            type='email'
            className='sample__form'
            component={SampleFormField}
            label='Email'
            validate={[ required, email ]}
          />
        </div>
        <div>
          <Field
            name='password'
            type='password'
            className='sample__form'
            component={SampleFormField}
            label='Password'
            validate={[ required ]}
            warn={passwordStrengh}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

SampleForm.propTypes = propTypes

SampleForm.defaultProps = defaultProps

export default reduxForm({
  form: 'sample',
  asyncValidate: uniqueEmail,
  asyncBlurFields: [ 'email' ]
})(SampleForm)
