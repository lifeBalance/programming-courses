var React = require('react');
var AuthorApi = require('../../api/author-api');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      authors: []
    };
  },
  componentWillMount: function () {
    // An asynchronous call to the API is enough in this case.
    this.setState({ authors: AuthorApi.getAllAuthors() });
  },
  render: function () {
    var createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };

    return (
      <div className=''>
        <h1>Authors</h1>

        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>

          <tbody>
            {this.state.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});
