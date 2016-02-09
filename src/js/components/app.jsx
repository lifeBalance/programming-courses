// Bootstrap
window.$ = window.jQuery = require('jquery');
var bootstrapJS = require('bootstrap-sass'); // Bootstrap JavaScripts.

// React stuff
var React   = require('react');
var Header  = require('./common/header');

var RouteHandler  = require('react-router').RouteHandler;

var Alert = require('./common/alert');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Header />

        <div className="container-fluid">
          <RouteHandler />
          {/* <Alert /> */}
        </div>
      </div>
    );
  }
});
