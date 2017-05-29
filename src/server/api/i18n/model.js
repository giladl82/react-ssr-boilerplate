export function getLocaleMessages (locale) {
  return new Promise((resolve, reject) => {
    switch (locale.toLowerCase()) {
      case 'he':
        resolve({
          'header.homepage': 'עמוד הבית',
          'header.subpage': 'עמוד משנה',
          'header.subpage2': 'עמוד משנה 2',
          'header.popup': 'חלון מודאלי',
          'header.privateNo': 'עמוד מוגן - חסון',
          'header.privateYes': 'עמוד מוגן - מאושר'
        })
        break
      default:
        resolve({
          'header.homepage': 'Home Page',
          'header.subpage': 'Subpage 1',
          'header.subpage2': 'Subpage 2',
          'header.popup': 'Modal popup',
          'header.privateNo': 'Protected - No access',
          'header.privateYes': 'Protected - with access'
        })
        break
    }
  })
}
