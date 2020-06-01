import React from 'react';
import styled from 'styled-components';

import './styles.css';

const Navbar = () => {
  return (
    <div id='navbar-wrapper'>
      <h1 id='navbar-title'>my concierge</h1>
      <div id='navbar-form'>
        <h2 id='navbar-form-label'>search:</h2>
        <input className='navbar-inputs' placeholder='city' />
        <input className='navbar-inputs' placeholder='arrival date' />
        <input className='navbar-inputs' placeholder='nights' />
        <div id='navbar-submit-button'>go</div>
      </div>
    </div>
  );
};

export default Navbar;
