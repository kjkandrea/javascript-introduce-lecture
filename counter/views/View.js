export default class View {
  constructor () {
    this._events = {}
  }

  on (eventName, callback) {
    this._events[eventName] = callback

    return this
  }

  emit (eventName) {
    this._events[eventName]?.()
  }
}