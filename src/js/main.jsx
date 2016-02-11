var React   = require('react');

var Router  = require('react-router');
var routes  = require('./routes');

var InitializeActions = require('./actions/initialize-actions');

InitializeActions.initApp();

// Router.HistoryLocation enables clean urls using HTML5 history API.
// If used, remember to redirect all server-side requests to index.html,
// so they're handled by the client-side router.
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('root'));
});
