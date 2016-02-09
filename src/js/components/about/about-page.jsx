var React = require('react');

module.exports = React.createClass({
  statics: {
    willTransitionTo: function (transition, params, query, callback) {
      if (!confirm('Are you sure you want to read this page?')) {
        transition.about();
      } else {
        callback();
      }
    },
    willTransitionFrom: function (transition, component) {
      if (!confirm('You sure you want to leave?')) {
        transition.about();
      }
    }
  },
  render: function () {
    return (
      <div>
        <h1>About</h1>
        <p>To build this app we have used:</p>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Flux</li>
          <li>Node</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    );
  }
});
