// Fetch Data with useEffect
// Description: Create a component that fetches data from an API and displays it in a list using the useEffect hook.

// Steps:
//     - Write your code within the file, by the name of component as Fetch_Data

import React, { useState, useEffect } from 'react';

function Ques_6_Fetch_Data() {
  const [data, setData] = useState([]);     // Store fetched data
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state

  useEffect(() => {
    // Replace with your desired API endpoint
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);  // Empty dependency array to run once on mount

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Fetched Data List</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ques_6_Fetch_Data;
