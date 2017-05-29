const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const required = value => (value ? undefined : 'Required')

export const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address' : undefined)

export const passwordStrengh = value => {
  return ((value && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(value))
    ? undefined : 'Password is weak')
}

export const uniqueEmail = values => {
  return sleep(700).then(() => {
    if (values.email === 'mail@mail.com') {
      throw { email: 'This email is taken' }
    }
  })
}
