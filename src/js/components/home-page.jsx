var React = require('react');
var Router = require('react-router');
var Link   = Router.Link;

module.exports = React.createClass({
  render: function () {
    return (
      <div className='jumbotron'>
        <h1>Programming Courses Administration</h1>
        <p>React, React-router and Flux</p>
        <Link to="about" className='btn btn-primary btn-lg'>Learn more</Link>
      </div>
    );
  }
});
