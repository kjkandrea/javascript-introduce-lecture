export default {
  init(count) {
    this.countElement = document.getElementById('count')
    this.incrementButtonElement = document.getElementById('increment')
    this.decrementButtonElement = document.getElementById('decrement')
    this._events = {}

    this.render(count)
    this.attachEvents();
  },
  render(count) {
    this.countElement.value = count;
  },
  attachEvents() {
    this.incrementButtonElement.addEventListener('click', () => this.emit('@increment'))
    this.decrementButtonElement.addEventListener('click', () => this.emit('@decrement'))
  },
  on (eventName, callback) {
    this._events[eventName] = callback

    return this
  },
  emit (eventName) {
    this._events[eventName]?.()
  }
}