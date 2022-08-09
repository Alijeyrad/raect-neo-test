import React from 'react';
import { FaSpinner } from 'react-icons/fa';

function Spinner() {
  return (
    <div className="w3-display-container" style={{ height: '80vh' }}>
      <p className="w3-display-middle"><FaSpinner className="w3-spin" style={{ fontSize: '64px' }} /></p>
    </div>
  );
}

export default Spinner;
