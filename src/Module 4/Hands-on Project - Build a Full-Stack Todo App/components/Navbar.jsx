import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/todos" style={{ marginRight: '1rem' }}>Todos</Link>
      <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
