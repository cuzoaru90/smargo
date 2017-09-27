var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './components/main';
import About from './components/about';
import HowItWorks from './components/howitworks';
import StartJourney from './components/startjourney';
injectTapEventPlugin();

var router = (
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
    <Route path="/signin" component={About}/>
    <Route path="/howitworks" component={HowItWorks}/>
    <Route path="/startjourney" component={StartJourney}/>

  </Router>
);


$(document).on('ready', function () {
  ReactDOM.render(
    router, $('.entry')[0]
  );
});
