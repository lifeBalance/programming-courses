var React  = require('react');
var Router = require('react-router');
var Link   = Router.Link;

module.exports = React.createClass({
  render: function () {
    return (
      <nav className='navbar navbar-default'>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="app" className="navbar-brand">
              <img src="images/brand-logo.png" alt="Brand" height="22px" />
            </Link>
          </div>

          <ul className="nav navbar-nav">
            <li><Link to="app">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="authors">Authors</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});
