import { GET_PAGE_CONTENT } from './app-shared-actions'

const defaultState = {
  pages: {},
  locale: '',
  messages: {}
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PAGE_CONTENT:
      const pages = {
        [ action.pageName ]: action.content.toString()
      }
      return Object.assign({}, state, { pages })
    default:
      return state
  }
}

export default reducer
