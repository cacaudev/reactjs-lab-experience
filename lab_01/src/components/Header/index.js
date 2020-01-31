import React from 'react';
import './styles.css';
import { magicLogo } from '../../assets/img';

const Header = () => (
  <header id="main-header">
    <span className="logo">
      <img src={magicLogo} alt="MagicTheGathering Logo" width="120px" height="40px" />
    </span>
    <span className="title">
      Magic The Gathering Cards
    </span>
    <span className="links">
      {/*User*/}
    </span>
  </header>
);

export default Header;
