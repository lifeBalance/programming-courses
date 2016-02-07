var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <h1><span className="glyphicon glyphicon-star" aria-hidden="true"></span>Hello {this.props.name}!</h1>
    );
  }
});
