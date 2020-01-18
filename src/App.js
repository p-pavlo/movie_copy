import React, { StrictMode } from 'react';
import { withRouter } from 'react-router-dom';
// import ErrorBoundary from 'react-error-boundary';
// routes
import Routes from './routes';

//  /////////////////////////////////////////////////////////////////////////////////////////////////

// const ErrorFallback = ({ error }) => {
//   return (
//     <>
//       <p>There was an error</p>
//       <pre style={{ maxWidth: 700 }}>{JSON.stringify(error, null, 2)}</pre>
//     </>
//   );
// };

const App = () => (
  <StrictMode>
    {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
      <Routes />
    {/* </ErrorBoundary> */}
  </StrictMode>
);

export default withRouter(App);
