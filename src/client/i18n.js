import { addLocaleData } from 'react-intl'

import heLocaleData from 'react-intl/locale-data/he'
import enLocaleData from 'react-intl/locale-data/en'

addLocaleData([
  ...enLocaleData,
  ...heLocaleData
])
