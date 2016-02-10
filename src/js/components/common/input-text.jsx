var React = require('react');

module.exports = React.createClass({
  propTypes: {
    name:         React.PropTypes.string.isRequired,
    label:        React.PropTypes.string.isRequired,
    onChange:     React.PropTypes.func.isRequired,
    placeholder:  React.PropTypes.string,
    value:        React.PropTypes.string,
    error:        React.PropTypes.string
  },

  render: function () {
    // Dinamically creating a wrapper class for Bootstrap.
    var wrapperClass = 'form-group';

    //Adding the `has-error` class if there is some error
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += ' ' + 'has-error'; // Adds red line around input
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>

        <div className="field">
          <input  type="text"
                  name={this.props.name}
                  className='form-control'
                  placeholder={this.props.placeholder}
                  ref={this.props.name}
                  onChange={this.props.onChange}
                  value={this.props.value} />

          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
});
