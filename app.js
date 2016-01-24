
exports.loadContext = function(callback) {
  var context = require.context('./pages', true);
  if (module.hot) {
    module.hot.accept(context.id, function() {
      context = require.context('./pages', true);
      return callback(context);
    });
  }
  return callback(context);
};


var first = true;

exports.onRouteChange = function(state, page, pages, config) {
  window._paq = window._paq || [];

  if (!page) {
    return;
  }

  if (first) {
    window._paq.push(['trackPageView', 'initial render']);
    first = false;
  }
  else {
    window._paq.push(['setCustomUrl', page.path]);
    window._paq.push(['setDocumentTitle', 'blog/' + page.title || page.requirePath]);
    window._paq.push(['trackPageView']);
  }
}
