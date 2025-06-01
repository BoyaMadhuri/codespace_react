import React, { Component } from 'react';
import ParentComponent from './Module 4/Advanced React Concepts/Optimizing Performance with React Memoization/ParentComponent';

// Simple Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while rendering the component.</h2>;
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <div>
      <h1>React Memoization Demo</h1>
      <ErrorBoundary>
        <ParentComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;
