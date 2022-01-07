import view from './view.js'
import model from './model.js'

export default {
  init() {
    view.init(model.count.value)
      .on('@increment', () => {
        model.increment()
        view.render(model.count.value)
      })
      .on('@decrement', () => {
        model.decrement()
        view.render(model.count.value)
      })
  }
}