/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef } from 'react';
import {
  FaUser, FaHome, FaInfoCircle, FaRedoAlt, FaBars,
} from 'react-icons/fa';

function Header() {
  // Get the Sidebar
  const mySidebar = useRef(null);
  const myOverlay = useRef(null);

  // Toggle between showing and hiding the sidebar
  function w3Open() {
    if (mySidebar.current.style.display === 'block') {
      mySidebar.current.style.display = 'none';
      myOverlay.current.style.display = 'none';
    } else {
      mySidebar.current.style.display = 'block';
      myOverlay.current.style.display = 'block';
    }
  }

  // Close the sidebar with clicking the overlay
  function w3Close() {
    mySidebar.current.style.display = 'none';
    myOverlay.current.style.display = 'none';
  }

  return (
    <>
      <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: '4' }}>
        <button className="w3-bar-item w3-button w3-hover-none w3-hover-text-light-grey" onClick={w3Open} type="button">
          <FaBars style={{ transform: 'translate(0px, 2.5px)' }} />
          {' '}
          Menu
        </button>
        <span className="w3-bar-item w3-right">Five Factor Test</span>
      </div>

      <div
        ref={mySidebar}
        className="w3-sidebar w3-center w3-bar-block w3-black w3-large w3-animate-left"
        style={{
          width: '90px', display: 'none', paddingTop: '10px', zIndex: '5',
        }}
      >
        <a href="#" className="w3-bar-item w3-button w3-margin-bottom">
          <FaUser />
          {' '}
          Profile
        </a>
        <a href="#" className="w3-bar-item w3-button w3-margin-bottom">
          <FaHome />
          {' '}
          Home
        </a>
        <a href="#" className="w3-bar-item w3-button w3-margin-bottom">
          <FaRedoAlt />
          {' '}
          Restart
        </a>
        <a href="/" className="w3-bar-item w3-button">
          <FaInfoCircle />
          About
        </a>
      </div>

      {/* <!-- Overlay effect when opening sidebar on small screens --> */}
      <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={w3Close} onKeyDown={w3Close} role="button" tabIndex={0} style={{ cursor: 'pointer' }} title="Close Menu" ref={myOverlay} />
    </>
  );
}

export default Header;
