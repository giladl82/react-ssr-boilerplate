import axios from 'axios'
import { GET_PAGE_CONTENT } from './app-shared-actions'

const getPageContent = (pageName, content) => {
  return {
    type: GET_PAGE_CONTENT,
    pageName,
    content
  }
}

export function getPageContentAsync (pageName) {
  return (dispatch, getSate) => {
    axios.get(`/api/page-content/${pageName}`).then((response) => {
      dispatch(getPageContent(pageName, response.data))
    })
  }
}
