export default {
  init(count) {
    this.countElement = document.getElementById('count')

    this.render(count)
  },
  render(count) {
    this.countElement.value = count;
  }
}