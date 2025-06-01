import React, { Suspense, lazy } from 'react';

const FetchData = lazy(() => import('./Module 4/Advanced React Concepts/Fetching Data Using Fetch API & Axios/FetchData'));

const App = () => {
  return (
    <div>
      <h1>React Fetch API Example</h1>
      <Suspense fallback={<div>Loading component...</div>}>
        <FetchData />
      </Suspense>
    </div>
  );
};

export default App;
