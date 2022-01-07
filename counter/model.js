import Subject from './observable/Subject.js'

export default {
  count: new Subject(0),

  increment() {
    this.count.next(this.count.value + 1)
  },

  decrement() {
    if(1 > this.count.value) return;
    this.count.next(this.count.value - 1)
  }
}