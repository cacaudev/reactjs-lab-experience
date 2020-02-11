import React from 'react';
import './styles.css';
import { magicLogo } from '../../assets/img';

const links = [
  {
    name: 'Profile',
    isImplemented: true,
  },
  {
    name: 'About',
    isImplemented: false,
  },
];

const Header = () => (
  <header id="main-header">
    <span className="logo">
      <img src={magicLogo} alt="MagicTheGathering Logo" width="130px" height="80px" />
    </span>
    <span className="title">
      Magic The Gathering Cards
    </span>
    <span className="links">
      {links.map((item) => (
        <span className="link-text">
          <span>
            {item.name}
          </span>
          {!item.isImplemented && (
            <span className="not-implemented">
              In Construction
            </span>
          )}
        </span>
      ))}
    </span>
  </header>
);

export default Header;
