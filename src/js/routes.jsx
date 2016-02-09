var React         = require('react');

var Router        = require('react-router');
var DefaultRoute  = Router.DefaultRoute;
var Route         = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect      = Router.Redirect;

var App     = require('./components/app');
var Home    = require('./components/home-page');
var About   = require('./components/about/about-page');
var Authors = require('./components/authors/authors-page');
var NotFoundPage  = require('./components/not-found');

var routes = (
  <Route name='app' path='/' handler={App} >
    <DefaultRoute handler={Home} />

    <Route name='about' handler={About} />
    <Route name='authors' handler={Authors} />
    <NotFoundRoute handler={NotFoundPage} />
    <Redirect from='about-us' to='about' />
    <Redirect from='about/*' to='about' />
  </Route>
);

module.exports = routes;
