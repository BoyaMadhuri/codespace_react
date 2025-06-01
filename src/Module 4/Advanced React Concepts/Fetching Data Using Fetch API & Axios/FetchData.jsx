import React, { useEffect, useState, useMemo } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isMounted = true; // to avoid setting state if component unmounts

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        if (isMounted) {
          setData(json);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [retryCount]); // refetch if retryCount changes

  const displayedData = useMemo(() => data.slice(0, 10), [data]);

  if (loading) return <p>Loading data...</p>;
  if (error)
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={() => setRetryCount(count => count + 1)}>Retry</button>
      </div>
    );

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {displayedData.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
