"use strict";

var React = require('react');
var AuthorApi = require('../../api/author-api');
var AuthorList = require('./authors-list');

var Router = require('react-router');
var Link   = Router.Link;

module.exports = React.createClass({
  getInitialState: function () {
    return {
      authors: []
    };
  },
  componentDidMount: function () {
    if (this.isMounted()) {
      this.setState({ authors: AuthorApi.getAllAuthors() });
    }
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
