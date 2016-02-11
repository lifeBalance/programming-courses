var Dispatcher = require('../dispatcher/dispatcher');
var ActionTypes = require('../constants/action-types');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var _ = require('lodash');

var _authors = []; // Private variable to store data.

var AuthorStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  },

  emitChange: function () {
    this.emit('change');
  },

  getAllAuthors: function () {
    return _authors;
  },

  getAuthorById: function (id) {
    return _.find(_authors, {id: id});
  }
});

// Registering the store with the Dispatcher
// so the store it's notified when actions occur.
// This function is gonna get called when ANY
// action gets dispatched.
Dispatcher.register(function (action) {
  switch (action.actionType) {
  case ActionTypes.INITIALIZE:
    _authors = action.initialData.authors;
    AuthorStore.emitChange();
    break;
  case ActionTypes.CREATE_AUTHOR:
    _authors.push(action.author); // The `author` data comes in the payload.
    AuthorStore.emitChange();
    break;
  case ActionTypes.UPDATE_AUTHOR:
    var existingAuthor = _.find(_authors, {id: action.author.id});
    var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
    _authors.splice(existingAuthorIndex, 1, action.author);
    AuthorStore.emitChange();
    break;
  case ActionTypes.DELETE_AUTHOR:
    _.remove(_authors, function (author) {
      return action.id === author.id;
    });
    AuthorStore.emitChange();
    break;
  }
});

module.exports = AuthorStore;
