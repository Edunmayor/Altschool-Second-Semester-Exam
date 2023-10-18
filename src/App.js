import React from 'react';
import CounterPage from './Components/CounterPage';
import NotFound from './Components/NotFound';
import ErrorBoundary from './Components/ErrorBoundary';
import ErrorPage from './Components/ErrorPage';


function App() {
  // Get the current URL pathname
  const pathname = window.location.pathname;
  const heading = {
    color: 'blue'
  }
  return (
    <div>
      <h1 style={heading}>Custom Counter App</h1>
      {pathname === '/' ? <CounterPage /> : <NotFound />}

      <ErrorBoundary>
        <ErrorPage />
      </ErrorBoundary>

    </div>
  );
}

export default App;


