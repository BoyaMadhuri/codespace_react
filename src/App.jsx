import React, { Suspense, lazy } from 'react';

const AxiosData = lazy(() => import('./Module 4/Advanced React Concepts/Fetching Data Using Fetch API & Axios/AxiosData'));

const App = () => {
  return (
    <div>
      <h1>Axios Data Fetch Example</h1>
      <Suspense fallback={<div>Loading component...</div>}>
        <AxiosData />
      </Suspense>
    </div>
  );
};

export default App;
