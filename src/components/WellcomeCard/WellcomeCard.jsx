/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowRightAlt } from 'react-icons/md';
import TestInfo from '../TestInfo/TestInfo';

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
    <div className="w3-animate-left w3-margin-bottom">
      <div className="w3-row-padding w3-padding">
        <div className="w3-content w3-light-gray w3-padding w3-card" style={{ maxWidth: '700px' }}>
          <div className="w3-container w3-padding w3-margin-bottom" style={{ minHeight: '460px' }}>
            <h3 className="w3-center">Welcome</h3>
            <hr style={{ borderColor: 'black' }} />
            <h6 className="w3-margin-top">
              <MdArrowRightAlt style={{ marginRight: '5px', transform: 'translate(0px, 2px)' }} />
              This test is created using the IPIP scales that represent the
              NEO-PI-R created by Costa and McCrae.
            </h6>
            <h6>
              <MdArrowRightAlt style={{ marginRight: '5px', transform: 'translate(0px, 2px)' }} />
              There will be
              {' '}
              <b>50 questions</b>
              {' '}
              and you&apos;ll have
              {' '}
              <b>as much time as you need</b>
              .
            </h6>
            <TestInfo />
            <div className="w3-margin-bottom">
              <input ref={check} className="w3-check" style={{ marginRight: '6px' }} type="checkbox" name="check" id="check" onChange={handleCheck} />
              <label htmlFor="check"><b>I have read and accepted the instructions above.</b></label>
            </div>
            <div className="w3-center">
              <Link to="/questions">
                <button ref={startButton} style={{ letterSpacing: '2px' }} type="button" className="w3-button w3-round w3-black w3-xlarge w3-margin-top" disabled>START</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WellcomeCard;
