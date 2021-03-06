import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import '../node_modules/highlight.js/styles/agate.css';
import routes from './config/routes.js';
import {Router, browserHistory} from 'react-router';
import App from './App';


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('root')
);
