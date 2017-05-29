import appSharedReducer from './_shared/app-shared-reducer'
import { reducer as formReducer } from 'redux-form'

export default {
  app: appSharedReducer,
  form: formReducer
}
