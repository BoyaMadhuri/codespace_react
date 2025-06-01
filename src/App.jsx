import React, { Suspense, lazy, Component } from 'react';

// Lazy load AxiosData component
const AxiosData = lazy(() => import('./Module 4/Advanced React Concepts/Fetching Data Using Fetch API & Axios/AxiosData'));

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to render fallback UI on next render
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You can log the error to an error reporting service here
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red' }}>
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message || 'Unknown error occurred.'}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <div>
      <h1>Axios Data Fetch Example</h1>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading component...</div>}>
          <AxiosData />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
