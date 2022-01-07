import View from './View.js'

class Counter extends View {
  init (count) {
    this.update(count)
    this.attachEvents()

    return this
  }

  update (count) {
    document.getElementById('count').value = count
  }

  attachEvents () {
    document.getElementById('increment').
      addEventListener('click', () => this.emit('@increment'))
    document.getElementById('decrement').
      addEventListener('click', () => this.emit('@decrement'))
  }
}

export default new Counter();