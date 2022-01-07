import view from './view.js'
import model from './model.js'

export default {
  init() {
    view.init(model.count)
      .on('@increment', () => {
        model.increment()
        view.render(model.count)
      })
      .on('@decrement', () => {
        model.decrement()
        view.render(model.count)
      })
  }
}