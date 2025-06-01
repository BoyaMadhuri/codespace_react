// Form with Multiple Input Fields
// Description: Create a form for user registration with fields for username, email, and password. Display the entered data under the form.


// Steps:
//     - Write your code within the file, by the name of component as Complex_Form

import React, { useState } from 'react';

function Ques_7_Complete_Form() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', fontFamily: 'Arial' }}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <button type="submit" style={{ padding: '8px 16px' }}>Register</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: 24, padding: 12, border: '1px solid #ccc' }}>
          <h3>Submitted Data:</h3>
          <p><strong>Username:</strong> {submittedData.username}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default Ques_7_Complete_Form;
