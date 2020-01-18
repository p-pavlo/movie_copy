import React from 'react';
import ReactDOM from 'react-dom';
import { Router as BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// root
import App from './App';
import * as serviceWorker from './serviceWorker';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
