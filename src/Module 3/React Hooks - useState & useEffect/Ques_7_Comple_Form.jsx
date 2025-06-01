import React, { useState, useCallback } from 'react';

// Reusable input field component with error display
function InputField({ label, type, name, value, onChange, error }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <label>{label}:</label><br />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{ width: '100%', padding: 8, borderColor: error ? 'red' : '#ccc' }}
      />
      {error && <div style={{ color: 'red', marginTop: 4 }}>{error}</div>}
    </div>
  );
}

function Ques_7_Complete_Form() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Validation function
  const validate = () => {
    const errs = {};
    if (!formData.username.trim()) errs.username = 'Username is required';
    else if (formData.username.length < 3) errs.username = 'Username must be at least 3 characters';

    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Email is invalid';

    if (!formData.password) errs.password = 'Password is required';
    else if (formData.password.length < 6) errs.password = 'Password must be at least 6 characters';

    return errs;
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedData(formData);
    setFormData({ username: '', email: '', password: '' });
  }, [formData]);

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', fontFamily: 'Arial' }}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit} noValidate>
        <InputField
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          Register
        </button>
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
