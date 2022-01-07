export default class Subject {
  constructor (value) {
    this.subscribers = []
    this.next(value)
  }

  get value () {
    return this._value
  }

  next (value) {
    this._value = value
    this.dispatch()
  }

  subscribe (fn) {
    this.subscribers.push(fn)
  }

  dispatch () {
    this.subscribers.forEach(fn => fn(this.value))
  }
}