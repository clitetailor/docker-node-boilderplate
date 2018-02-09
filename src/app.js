import template from './app.html'

export class App {
  /**
   * @param {HTMLElement} element
   */
  constructor(element) {
    this.root = element
  }

  init() {
    const root = this.root

    root.innerHTML = template
    root.querySelector('h1').textContent = 'Hello World!'
  }
}
