import React from 'react';
import { Link } from 'react-router-dom';
import Select from '../Select/Select';

function Pagination({
  handlePage, handleNext, handlePrev, page,
}) {
  return (
    <div className="w3-animate-left w3-center">
      <div
        className="w3-row-padding"
        style={{
          zIndex: '1', position: 'fixed', bottom: '0', width: '100%', padding: '0 16px',
        }}
      >
        <div className="w3-content w3-blue-gray w3-padding-16" style={{ maxWidth: '700px', opacity: '0.97' }}>
          <div className="w3-container" style={{ zIndex: '1' }}>
            <div className="pagination">
              <button type="button" onClick={handlePrev} className="w3-button w3-large w3-round">&laquo;</button>
              <Select page={page} handlePage={handlePage} />
              <button type="button" onClick={handleNext} className="w3-button w3-large w3-round">&raquo;</button>
              <button type="button" className="submitButton w3-button w3-large w3-round w3-light-gray w3-wide">
                <Link to="/submit" style={{ textDecoration: 'none' }}>
                  SUBMIT
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
