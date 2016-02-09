var React   = require('react');
var Router = require('react-router');
var Link   = Router.Link;

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Page not found</h1>
        <p>Woops, the page you're looking for doesn't exist.</p>
        <p><Link to='app'>Back to Home Page</Link></p>
      </div>
    );
  }
});
