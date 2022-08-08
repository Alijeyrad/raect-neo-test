import React from 'react';

function Spinner() {
  return (
    <div className="w3-display-container" style={{ height: '80vh' }}>
      <p className="w3-display-middle"><i className="fa fa-spinner w3-spin" style={{ fontSize: '64px' }} /></p>
    </div>
  );
}

export default Spinner;
