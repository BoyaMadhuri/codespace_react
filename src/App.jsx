import React from 'react';
import SimpleForm from './Module 4/Advanced React Concepts/Forms/SimpleForm';

const App = () => {
  return (
    <main style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <header>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Simple Controlled Form</h1>
      </header>
      <section>
        <SimpleForm />
      </section>
    </main>
  );
};

export default App;
