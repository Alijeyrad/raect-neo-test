import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';

function UnansweredQuestions() {
  const { setTestFinished } = useContext(AppContext);

  function handleFinish() {
    setTestFinished(true);
  }

  return (
    <>
      <h4>Thank You</h4>
      <h5>
        You Have Answered All The Questions. You Can Double Check or Submit.
      </h5>

      <div className="w3-container w3-margin-bottom" style={{ marginTop: '30px' }}>
        <button onClick={handleFinish} type="button" className="w3-btn w3-black w3-round w3-xlarge" style={{ letterSpacing: '2px' }}>
          <Link to="/finish" style={{ textDecoration: 'none' }}>
            SUBMIT
          </Link>
        </button>
      </div>

      <div className="w3-container w3-margin-top w3-margin-bottom">
        <button type="button" className="w3-button w3-border w3-border-grey w3-round w3-large">
          <Link to="/questions" style={{ textDecoration: 'none' }}>
            Review Answers
          </Link>
        </button>
      </div>

    </>
  );
}

export default UnansweredQuestions;
