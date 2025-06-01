// Dependent API Calls with useEffect
// Description: Create a component that displays a list of users. When a user is clicked, fetch and display their posts.

// Steps to needed:
//     - First useEffect : Fetches the user list.
//     - Second useEffect([selectedUserId]) : Fetches posts when a user is selected.
//     - Write your code within the file, by the name of component as Dependent_API_Call
import React, { useState, useEffect } from 'react';

function Ques_9_Dependent_API_Call() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [error, setError] = useState(null);

  // Fetch users on mount
  useEffect(() => {
    setLoadingUsers(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoadingUsers(false);
      })
      .catch(err => {
        setError('Failed to load users');
        setLoadingUsers(false);
      });
  }, []);

  // Fetch posts when selectedUserId changes
  useEffect(() => {
    if (selectedUserId === null) return;

    setLoadingPosts(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoadingPosts(false);
      })
      .catch(err => {
        setError('Failed to load posts');
        setLoadingPosts(false);
      });
  }, [selectedUserId]);

  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h2>User List</h2>
      {loadingUsers ? (
        <p>Loading users...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {users.map(user => (
            <li
              key={user.id}
              onClick={() => setSelectedUserId(user.id)}
              style={{ cursor: 'pointer', color: selectedUserId === user.id ? 'blue' : 'black' }}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}

      {selectedUserId && (
        <>
          <h3>Posts by User {selectedUserId}</h3>
          {loadingPosts ? (
            <p>Loading posts...</p>
          ) : (
            <ul>
              {posts.map(post => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default Ques_9_Dependent_API_Call;
