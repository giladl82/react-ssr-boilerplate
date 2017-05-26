import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const configureStore = (preloadedState) => {
  // Using compose for redux devtools
  return createStore(
    combineReducers({ ...reducers }),
    preloadedState,
    compose(
      applyMiddleware(thunk),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
    ))
}

export default configureStore
