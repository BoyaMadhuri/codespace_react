import React, { useState } from 'react';

const Step1 = ({ formData, setFormData }) => (
  <div>
    <h2>Step 1: Personal Info</h2>
    <label>
      Name:
      <input
        type="text"
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
        required
      />
    </label>
  </div>
);

const Step2 = ({ formData, setFormData }) => (
  <div>
    <h2>Step 2: Contact Info</h2>
    <label>
      Email:
      <input
        type="email"
        value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
        required
      />
    </label>
  </div>
);

const Step3 = ({ formData }) => (
  <div>
    <h2>Step 3: Confirm Details</h2>
    <p>Name: {formData.name}</p>
    <p>Email: {formData.email}</p>
  </div>
);

const MultistepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = e => {
    e.preventDefault();
    alert('Form submitted successfully!');
    setStep(1);
    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && <Step1 formData={formData} setFormData={setFormData} />}
      {step === 2 && <Step2 formData={formData} setFormData={setFormData} />}
      {step === 3 && <Step3 formData={formData} />}

      <div style={{ marginTop: '20px' }}>
        {step > 1 && <button type="button" onClick={prevStep}>Back</button>}
        {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default MultistepForm;
