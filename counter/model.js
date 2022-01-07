export default {
  count: 0,

  increment() {
    this.count++
  },

  decrement() {
    if(1 > this.count) return;
    this.count--
  }
}