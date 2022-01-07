import view from './view.js'
import model from './model.js'

export default {
  init() {
    view.init(model.count)
  }
}