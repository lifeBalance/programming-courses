var React       = require('react');
var Router      = require('react-router');
var AuthorForm  = require('./author-form');

// var AuthorApi   = require('../../api/author-api');
var AuthorActions = require('../../actions/author');
var AuthorStore = require('../../stores/author');

module.exports = React.createClass({
  mixins: [
    Router.Navigation
  ],

  statics: {
    willTransitionFrom: function (transition, component) {
      if (component.state.dirty && !confirm("Do you want to leave without saving your changes?")) {
        transition.abort();
      }
    }
  },

  getInitialState: function () {
    return {
      author: { id: '', firstName: '', lastName: '' },
      errors: {},
      dirty: false
    };
  },

  // The change handler has to be named `handleChange` !!
  handleChange: function (event) {
    this.setState({dirty: true}); // Something has changed in the form.
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },

  componentWillMount: function () {
    var authorId = this.props.params.id;

    if (authorId) {
      this.setState({ author: AuthorStore.getAuthorById(authorId) });
    }
  },

  authorFormIsValid: function () {
    var formIsValid = true;
    this.state.errors = {};

    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters long.';
      formIsValid = false;
    }
    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters long.';
      formIsValid = false;
    }

    this.setState({ errors: this.state.errors });
    return formIsValid;
  },

  saveAuthor: function (event) {
    event.preventDefault();

    if (!this.authorFormIsValid()) {
      return; // If the form is not valid, we just return.
    }

    if (this.state.author.id) {
      AuthorActions.updateAuthor(this.state.author);
    } else {
      AuthorActions.createAuthor(this.state.author);
    }
    AuthorActions.createAuthor(this.state.author);
    this.setState({dirty: false}); // The form is clean again.

    this.transitionTo('authors');
  },

  render: function () {
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.handleChange}
        onSave={this.saveAuthor}
        errors={this.state.errors} />
    );
  }
});
