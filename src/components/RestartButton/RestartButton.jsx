import React from 'react';
import { FaRedoAlt } from 'react-icons/fa';
import RestartModal from '../RestartModal/RestartModal';

function RestartButton() {
  function openModal() {
    document.getElementById('modal').style.display = 'block';
  }

  return (
    <>
      <button href="#" className="w3-bar-item w3-button w3-margin-bottom" type="button" onClick={openModal}>
        <FaRedoAlt />
        {' '}
        Restart
      </button>

      <RestartModal />
    </>
  );
}

export default RestartButton;
