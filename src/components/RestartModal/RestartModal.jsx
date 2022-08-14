import React, { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';
import answers from '../../util/answers';

function RestartModal() {
  const history = useHistory();
  const modal = useRef(null);
  const { dispatch } = useContext(AppContext);

  function closeModal() {
    modal.current.style.display = 'none';
  }

  function restart() {
    dispatch({
      type: 'RESTART',
      questions: answers,
    });
    closeModal();
    history.push('/test');
  }

  return (
    <div ref={modal} id="modal" className="w3-modal">
      <div className="w3-modal-content w3-card-4 w3-animate-zoom">
        <header className="w3-container w3-blue-gray">
          <button
            onClick={closeModal}
            type="button"
            className="w3-button w3-display-topright"
          >
            &times;
          </button>
          <h3>Restart The Test</h3>
        </header>

        <div className="w3-container w3-text-black w3-left-align">
          <p>
            This will clear all your answers and start the test again.
            Do you really want to do this?
          </p>
          <button onClick={restart} type="button" className="w3-button w3-border w3-border-blue-gray w3-hover-blue-gray w3-round w3-margin-bottom">Restart</button>
          <button onClick={closeModal} type="button" className="w3-button w3-blue-gray w3-round w3-margin-bottom w3-margin-left">Go Back</button>
        </div>
      </div>
    </div>
  );
}

export default RestartModal;
