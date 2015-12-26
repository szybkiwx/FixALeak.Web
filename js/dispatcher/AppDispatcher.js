var Dispatcher = require('./Dispatcher')

class AppDispatcher extends Dispatcher {
  handleViewAction(action) {
    super.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
}

module.exports = AppDispatcher;
