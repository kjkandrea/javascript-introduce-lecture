const count = {
  count: 0,

  increment() {
    this.count++
  },

  decrement() {
    if(1 > this.count) return;
    this.count--
  }
}

console.log(count.count)
count.increment()
count.increment()
count.increment()
console.log(count.count)
count.decrement()
console.log(count.count)
count.decrement()
count.decrement()
count.decrement()
console.log(count.count)