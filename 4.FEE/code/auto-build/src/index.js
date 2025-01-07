import md from './doc.md'

// import { detail } from './detail'
// import { home } from './home'

const sayHello = () => {
  const str = 'Hello world'
  console.log(str)
}

// detail()
// home()

sayHello()

const renderMd = () => {
  const app = document.getElementById('app')
  const div = document.createElement('div')
  div.innerHTML = md
  app.appendChild(div)
}

renderMd()

const count = 2

// react.lazy()
// vue defineasynccomponent
if (count > 1) {
  import('./home').then((module) => {
    module.home()
  })
} else {
  import('./detail').then((module) => {
    module.detail()
  })
}
