var React   = require('react');
var Router  = require('react-router');
var Link    = Router.Link;

var AuthorActions = require('../../actions/author');


module.exports = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  // We could have also passed this function down from the parent via props
  deleteAuthor: function (id, event) {
    event.preventDefault();
    AuthorActions.deleteAuthor(id);
    // Showing a Bootstrap alert would be nice here.
  },

  render: function () {
    var createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td><a href='#' onClick={this.deleteAuthor.bind(this, author.id)} >Delete</a></td>
          <td><Link to='editAuthor' params={{id: author.id}}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
            <th></th>
            <th>ID</th>
            <th>Name</th>
          </thead>

          <tbody>
            {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});
