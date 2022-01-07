export default {
  init(count) {
    this.countElement = document.getElementById('count')
    this.incrementButtonElement = document.getElementById('increment')
    this.decrementButtonElement = document.getElementById('decrement')

    this.render(count)
    this.attachEvent();
  },
  render(count) {
    this.countElement.value = count;
  },
  attachEvent() {
    this.incrementButtonElement.addEventListener('click', () => console.log('increment'))
    this.decrementButtonElement.addEventListener('click', () => console.log('decrement'))
  }
}