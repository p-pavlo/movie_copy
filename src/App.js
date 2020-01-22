import React, { StrictMode } from 'react';
import { withRouter } from 'react-router-dom';
// routes
import Routes from './routes';


const App = () => (
  <StrictMode>
    <Routes />
  </StrictMode>
);

export default withRouter(App);
