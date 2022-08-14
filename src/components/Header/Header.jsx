import React, { useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';

function Header() {
  // Get the Sidebar
  const mySidebar = useRef(null);
  const myOverlay = useRef(null);
  const location = useLocation();

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

  useEffect(() => { w3Close(); }, [location.pathname]);

  return (
    <>
      {/* Header */}
      <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: '4' }}>
        <button className="w3-bar-item w3-button w3-hover-none w3-hover-text-light-grey" onClick={w3Open} type="button">
          <FaBars style={{ transform: 'translate(0px, 2.5px)' }} />
          {' '}
          Menu
        </button>
        <span className="w3-bar-item w3-right">Five Factor Test</span>
      </div>

      <SideMenu ref={mySidebar} />

      {/* Overlay Effect */}
      <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={w3Close} onKeyDown={w3Close} role="button" tabIndex={0} style={{ cursor: 'pointer' }} title="Close Menu" aria-label="Close Menu" ref={myOverlay} />
    </>
  );
}

export default Header;
