var Dispatcher  = require('../dispatcher/dispatcher');
var AuthorApi   = require('../api/author-api');
var ActionTypes = require('../constants/action-types');

var InitializeActions = {
  initApp: function () {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    });
  }
}


module.exports = InitializeActions;
