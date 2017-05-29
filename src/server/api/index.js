import { Router } from 'express'
import PageContent from './page-content'
import I18n from './i18n'

const router = Router()

router.use('/page-content', PageContent)
router.use('/i18n', I18n)
export default router
