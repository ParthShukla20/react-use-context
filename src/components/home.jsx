import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <>
        <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
          <li style={{ marginRight: '10px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ marginRight: '10px' }}>
            <Link to="/form">Form</Link>
          </li>
          <li style={{ marginRight: '10px' }}>
            <Link to="/name">Name</Link>
          </li>
          <li style={{ marginRight: '10px' }}>
            <Link to="/comp">UseContext</Link>
          </li>
          <li style={{ marginRight: '10px' }}>
            <Link to="/header">Header</Link>
          </li>
        </ul>
      </>
    );
  }
  
export default Home; 