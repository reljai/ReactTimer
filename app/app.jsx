var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// load Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!ApplicationStyles');

/* e.g.
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
*/

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>,
    document.getElementById('app')
);