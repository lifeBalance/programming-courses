var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="alert alert-success alert-dismissible" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

        <strong>Hey!</strong> Bootstrap's JavaScripts are working just fine!!
      </div>
    );
  }
});
