import { getPageContent } from './model'

export function getOne (req, res, next) {
  const {pageName} = req.params
  getPageContent(pageName).then((response) => res.send(response))
}
