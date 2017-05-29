import { Router } from 'express'
import { getOne } from './controller'

const router = Router()

router.route('/:pageName')
  .get(getOne)

module.exports = router
