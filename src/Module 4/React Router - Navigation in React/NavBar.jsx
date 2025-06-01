
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
      <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
      <Link to="/subpage" style={{ margin: '0 10px' }}>Subpage</Link>
    </nav>
  );
}

export default NavBar;
