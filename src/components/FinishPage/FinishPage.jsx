import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner, FaRegSadTear, FaRegCheckCircle } from 'react-icons/fa';
import AppContext from '../../contexts/AppContext';
import useAxios from '../../hooks/useAxios';
import questions from '../../util/questions.json';

function FinishPage() {
  const { state, dispatch } = useContext(AppContext);

  // create a new map to fill with answers and related info
  const codedAnswers = new Map();

  // function to get information about questions from questions object
  function getInfoFromQuestions(key) {
    const info = {};
    questions.questions.forEach((question) => {
      if (question.code === key) {
        info.code = question.code;
        info.key = question.key;
        info.scale = question.scale;
      }
    });
    return info;
  }

  // construct answer scores
  state.forEach((value, key) => {
    const infoAboutQuestion = getInfoFromQuestions(key);
    infoAboutQuestion.answer = value;
    codedAnswers.set(key, infoAboutQuestion);
  });

  // get the time from localStorage and add them to final object
  const minutes = window.localStorage.getItem('minutes');
  const seconds = window.localStorage.getItem('seconds');
  const hours = window.localStorage.getItem('hours');

  codedAnswers.set('minutes', minutes);
  codedAnswers.set('seconds', seconds);
  codedAnswers.set('hours', hours);

  // convert to object
  const codedAnswersObject = Object.fromEntries(codedAnswers);

  // useAxios to POST the results to server
  const { response, error, loading } = useAxios({
    method: 'POST',
    url: '/test_results/',
    data: codedAnswersObject,
  });

  // clear state
  function clearResults() {
    dispatch({
      type: 'RESTART',
    });
  }

  return (
    <div className="w3-animate-left w3-margin-bottom">
      <div className="w3-row-padding w3-padding">
        <div className="w3-content w3-light-gray w3-padding w3-card" style={{ maxWidth: '700px' }}>
          <div className="w3-center w3-container w3-padding w3-margin-bottom" style={{ minHeight: '440px' }}>
            {loading ? (
              <>
                <div className="w3-display-container" style={{ height: '15vh' }}>
                  <p className="w3-display-middle"><FaSpinner className="w3-spin" style={{ fontSize: '64px' }} /></p>
                </div>
                <p className="w3-center w3-large">Submiting Your Answers ...</p>
              </>
            ) : (
              <div className="w3-animate-opacity">
                {error && (
                <>
                  <div className="w3-display-container" style={{ height: '15vh' }}>
                    <p className="w3-display-middle w3-opacity"><FaRegSadTear style={{ fontSize: '64px' }} /></p>
                  </div>
                  <p className="w3-center w3-xlarge">Something went wrong.</p>
                  <p className="w3-center w3-large">
                    <Link to="/submit">Go Back</Link>
                    {' '}
                    And Submit Again.
                  </p>
                  <p className="w3-center">Try Again When You Have A Good Internet Connection</p>
                </>
                )}
                {response && (
                  <>
                    <div className="w3-display-container" style={{ height: '15vh' }}>
                      <p className="w3-display-middle w3-opacity"><FaRegCheckCircle style={{ fontSize: '64px' }} /></p>
                    </div>
                    <p className="w3-center w3-xlarge">Your Test Result Are Submitted.</p>
                    <p className="w3-center w3-large">
                      You can see them in your
                      {' '}
                      <a onClick={clearResults} href="/panel">profile</a>
                      .
                    </p>
                  </>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishPage;
