import view from '../views/counter.js'
import model from '../models/count.js'

export default {
  init () {
    model.count.subscribe(view.update)

    view.init(model.count.value)
      .on('@increment', () => model.increment())
      .on('@decrement', () => model.decrement())
  },
}