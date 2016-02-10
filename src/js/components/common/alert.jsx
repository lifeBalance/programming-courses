var React = require('react');

module.exports = React.createClass({
  propTypes: {
    message: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <div className="alert alert-success alert-dismissible" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

        <strong>Success!</strong>{this.props.message}
      </div>
    );
  }
});
