export function getPageContent (pageName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (pageName.toLowerCase()) {
        case 'homepage':
          resolve('Home page content')
          break
        case 'subpage':
          resolve('Sub page content')
          break
        case 'subpage2':
          resolve('Second sub page content')
          break
        default:
          resolve('Page not found')
      }
    }, 500)
  })
}
