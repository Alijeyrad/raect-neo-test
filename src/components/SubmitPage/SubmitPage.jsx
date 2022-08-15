import React, { useState, useEffect, useContext } from 'react';
import Spinner from '../Spinner/Spinner';
import AppContext from '../../contexts/AppContext';

function SubmitPage() {
  const [load, setLoad] = useState(true);
  const { state, answersList } = useContext(AppContext);
  const newState = new Map(state);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);

  const emptyAnswers = answersList.filter((answer) => !state.has(answer));
  emptyAnswers.forEach((answer) => newState.set(answer, null));

  function click() {
    console.log('state', state);
  }

  return (
    <>

      {!load && (
      <Spinner />
      )}

      {load && (
        <div className="w3-animate-left w3-margin-bottom">
          <div className="w3-row-padding w3-padding">
            <div className="w3-content w3-light-gray w3-padding w3-card" style={{ maxWidth: '700px' }}>
              <div className="w3-container w3-padding w3-margin-bottom" style={{ minHeight: '460px' }}>
                <h3 className="w3-center">You&apos;re Almost Done!</h3>
                <button type="button" onClick={click}>log</button>
                <h6>
                  There Are
                  {' '}
                  {emptyAnswers.length}
                  {' '}
                  Unanswered Questions.
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default SubmitPage;
