// Bootstrap
window.$ = window.jQuery = require('jquery');
var bootstrapJS = require('bootstrap-sass'); // Bootstrap JavaScripts.

var React       = require('react');
var MyComponent = require('./components/my-comp.jsx');
var Alert       = require('./components/alert.jsx');


var Jumbotron = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <MyComponent name="World" />
        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        <Alert />
      </div>
    );
  }
});

React.render(<Jumbotron name="World" />, document.getElementById('root'));
