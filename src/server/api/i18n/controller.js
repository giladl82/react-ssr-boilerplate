import { getLocaleMessages } from './model'

export function getOne (req, res, next) {
  const { locale } = req.params
  getLocaleMessages(locale).then((response) => res.send(response))
}
