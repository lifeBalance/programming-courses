var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <nav className='navbar navbar-default'>
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">
              <img src="images/brand-logo.png" alt="Brand" height="22px" />
            </a>
          </div>

          <ul className="nav navbar-nav">
            <li><a href="/#">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#authors">Authors</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});
