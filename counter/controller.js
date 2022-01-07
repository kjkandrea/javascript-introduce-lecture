import view from './view.js'
import model from './model.js'

export default {
  init() {
    model.count.subscribe(view.render)

    view.init(model.count.value)
      .on('@increment', () => model.increment())
      .on('@decrement', () => model.decrement())
  }
}