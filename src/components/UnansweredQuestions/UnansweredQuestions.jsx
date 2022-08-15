import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

function UnansweredQuestions({ num }) {
  return (
    <>
      <h4 className="w3-text-red">
        <FaExclamationTriangle style={{ marginRight: '7px', transform: 'translate(0, 1.8px)' }} />
        Warning
      </h4>
      <h5>
        There Are
        {' '}
        <span className="w3-text-red">{num}</span>
        {' '}
        Unanswered Questions.
      </h5>
      <h6>
        For your test results to be reliable, try to answer all of them.
      </h6>
      <div className="w3-container w3-margin-bottom" style={{ marginTop: '30px' }}>
        <button type="button" className="w3-button w3-black w3-round w3-large">
          <Link to="/questions" style={{ textDecoration: 'none' }}>
            Go Back
          </Link>
        </button>
      </div>
    </>
  );
}

export default UnansweredQuestions;
