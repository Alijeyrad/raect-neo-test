import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import useAxios from '../../hooks/useAxios';

function FinishPage() {
  const { state } = useContext(AppContext);

  const answersObject = Object.fromEntries(state);

  const { response, error, loading } = useAxios({
    method: 'POST',
    url: '/posts',
    body: JSON.stringify(answersObject),
  });

  function click() {
    console.log('error', error);
    console.log('response', response);
  }

  return (
    <div className="w3-animate-left w3-margin-bottom">
      <div className="w3-row-padding w3-padding">
        <div className="w3-content w3-light-gray w3-padding w3-card" style={{ maxWidth: '700px' }}>
          <div className="w3-center w3-container w3-padding w3-margin-bottom" style={{ minHeight: '440px' }}>
            <h3>You&apos;re Almost Done!</h3>
            {loading && (
              <h1>Loading...</h1>
            )}

            <button type="button" onClick={click}>log</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishPage;
