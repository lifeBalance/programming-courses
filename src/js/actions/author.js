var Dispatcher = require('../dispatcher/dispatcher');
var AuthorApi = require('../api/author-api');
var ActionTypes = require('../constants/action-types');

module.exports = {
  createAuthor: function (author) {
    var newAuthor = AuthorApi.saveAuthor(author); // In reality this would be AJAX

    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  },

  updateAuthor: function (author) {
    var updatedAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    });
  },

  deleteAuthor: function (id) {
    AuthorApi.deleteAuthor(id);

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id
    });
  }
};
