var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <h1>Hullo {this.props.name}!</h1>
    );
  }
});
