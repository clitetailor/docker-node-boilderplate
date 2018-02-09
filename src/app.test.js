const { App } = require('./app')
const { expect } = require('chai')

suite('App', () => {
  test('Expect app to show "Hello World!"', () => {
    const root = document.createElement('div')

    const app = new App(root)
    app.init()

    const h1 = root.querySelector('h1')

    expect(h1.textContent).to.equal('Hello World!')
  })
})
