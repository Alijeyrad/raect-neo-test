import React, { useState, useEffect, useContext } from 'react';
import Spinner from '../Spinner/Spinner';
import UnansweredQuestions from '../UnansweredQuestions/UnansweredQuestions';
import NoUnansweredQuestions from '../NoUnansweredQuestions/NoUnansweredQuestions';
import AppContext from '../../contexts/AppContext';

function SubmitPage() {
  const [load, setLoad] = useState(false);
  const { state, answersList } = useContext(AppContext);

  // create a copy of state
  const newStateWithEmptyAnswers = new Map(state);

  // stop loading animation
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);

  // create a list of questions that are not answered
  const emptyAnswers = answersList.filter((answer) => !state.has(answer));
  // populate the copied state (newStateWithEmptyAnswers) with empty answers
  // and set them to 'null'
  // so we can decide if there are any empty answers and if so, how many
  emptyAnswers.forEach((answer) => newStateWithEmptyAnswers.set(answer, null));

  return (
    <>

      {!load && (
      <Spinner />
      )}

      {load && (
        <div className="w3-animate-left w3-margin-bottom">
          <div className="w3-row-padding w3-padding">
            <div className="w3-content w3-light-gray w3-padding w3-card" style={{ maxWidth: '700px' }}>
              <div className="w3-center w3-container w3-padding w3-margin-bottom" style={{ minHeight: '440px' }}>
                <h3>You&apos;re Almost Done!</h3>
                <hr className="w3-border-black" />
                {emptyAnswers.length !== 0 && (
                  <UnansweredQuestions num={emptyAnswers.length} />
                )}
                {emptyAnswers.length === 0 && (
                  <NoUnansweredQuestions />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default SubmitPage;
