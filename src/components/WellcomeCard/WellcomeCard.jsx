/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import TestInfo from '../TestInfo/TestInfo';
import './WellcomeCard.css';

function WellcomeCard() {
  const check = useRef(null);
  const startButton = useRef(null);

  function handleCheck() {
    if (check.current.checked) {
      startButton.current.disabled = false;
    } else {
      startButton.current.disabled = true;
    }
  }

  return (
    <div className="w3-animate-left">
      <div className="w3-row-padding w3-padding">
        <div className="w3-content w3-light-gray w3-padding w3-card">
          <div className="w3-container w3-padding" style={{ minHeight: '460px' }}>
            <h3 className="w3-center">Welcome</h3>
            <h5 className="w3-margin-top">
              This test is created using the IPIP scales that represent the
              NEO-PI-R created by Costa and McCrae.
            </h5>
            <TestInfo />
            <div className="w3-margin-bottom">
              <input ref={check} className="w3-check" style={{ marginRight: '6px' }} type="checkbox" name="check" id="check" onChange={handleCheck} />
              <label htmlFor="check">I have read and accepted the instructions above.</label>
            </div>
            <div className="w3-center">
              <Link to="/start">
                <button ref={startButton} type="button" className="w3-button w3-black w3-xlarge w3-margin-top" disabled>Start</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WellcomeCard;
