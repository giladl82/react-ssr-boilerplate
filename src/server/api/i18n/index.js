import { Router } from 'express'
import { getOne } from './controller'

const router = Router()

router.route('/:locale')
  .get(getOne)

module.exports = router
