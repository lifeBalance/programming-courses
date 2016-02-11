"use strict";

var React = require('react');
var AuthorList = require('./authors-list');


// var AuthorApi = require('../../api/author-api');
var AuthorActions = require('../../actions/author');
var AuthorStore = require('../../stores/author');


var Router = require('react-router');
var Link   = Router.Link;

module.exports = React.createClass({
  getInitialState: function () {
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },

  componentWillMount: function () {
    AuthorStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    AuthorStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ authors: AuthorStore.getAllAuthors() });
  },

  render: function () {
    return (
      <div>
        <h1>Authors</h1>

        <Link to='addAuthor' className='btn btn-primary'>Add Author</Link>

        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
});
