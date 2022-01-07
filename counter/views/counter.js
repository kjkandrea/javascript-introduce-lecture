export default {
  init(count) {
    this._events = {}

    this.render(count)
    this.attachEvents();

    return this;
  },
  render(count) {
    document.getElementById('count').value = count;
  },
  attachEvents() {
    document.getElementById('increment')
      .addEventListener('click', () => this.emit('@increment'))
    document.getElementById('decrement')
      .addEventListener('click', () => this.emit('@decrement'))
  },
  on (eventName, callback) {
    this._events[eventName] = callback

    return this
  },
  emit (eventName) {
    this._events[eventName]?.()
  }
}