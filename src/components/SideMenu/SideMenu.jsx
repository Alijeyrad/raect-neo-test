import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUser, FaHome, FaCheckCircle,
} from 'react-icons/fa';
import RestartButton from '../RestartButton/RestartButton';

const SideMenu = forwardRef((props, ref) => (
  <div
    ref={ref}
    className="w3-sidebar w3-center w3-bar-block w3-black w3-large w3-animate-left"
    style={{
      width: '90px', display: 'none', paddingTop: '10px', zIndex: '5',
    }}
  >
    <Link to="/test" className="w3-bar-item w3-button">
      <FaCheckCircle />
      Start
    </Link>
    <a href="/panel" className="w3-bar-item w3-button w3-margin-bottom">
      <FaUser />
      {' '}
      Profile
    </a>
    <a href="/" className="w3-bar-item w3-button w3-margin-bottom">
      <FaHome />
      {' '}
      Home
    </a>

    <RestartButton />
  </div>
));

export default SideMenu;
