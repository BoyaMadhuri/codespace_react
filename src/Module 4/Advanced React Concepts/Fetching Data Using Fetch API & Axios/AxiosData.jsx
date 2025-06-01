import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const AxiosData = () => {
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
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

  const displayedData = useMemo(() => data.slice(0, 10), [data]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error} (Retrying {retryCount}/{maxRetries})</p>;

  return (
    <div>
      <h2>Posts (Fetched with Axios)</h2>
      <ul>
        {displayedData.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosData;
