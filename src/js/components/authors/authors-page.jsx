var React = require('react');
var AuthorApi = require('../../api/author-api');
var AuthorList = require('./authors-list');

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

        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
});
