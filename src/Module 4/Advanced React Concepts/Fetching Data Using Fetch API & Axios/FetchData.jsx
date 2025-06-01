import React, { useEffect, useState, useMemo } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        if (retryCount < maxRetries) {
          setTimeout(() => setRetryCount(retryCount + 1), 2000);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [retryCount]);

  // Memoize sliced data to avoid re-computation on every render
  const displayedData = useMemo(() => data.slice(0, 10), [data]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error} (Retrying {retryCount}/{maxRetries})</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {disp
