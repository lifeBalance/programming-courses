// Bootstrap
window.$ = window.jQuery = require('jquery');
var bootstrapJS = require('bootstrap-sass'); // Bootstrap JavaScripts.

// React stuff
var React   = require('react');
var Home    = require('./components/home-page');
var About   = require('./components/about/about-page');
var Header  = require('./components/common/header');

var App = React.createClass({
  render: function () {
    var Child;

    switch (this.props.route) {
      case 'about':
        Child = About;
        break;
      default:
        Child = Home;
    }

    return (
      <div>
        <Header />
        <Child />
      </div>
    );
  }
});


// Custom-made simple router
function render() {
  var route = window.location.hash.substr(1);
  React.render(<App route={route} />, document.getElementById('root'));
}

window.addEventListener('hashchange', render);
render(); // Calling render at the beginning.
