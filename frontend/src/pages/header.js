import React from 'react';
import Nav from '@bold-commerce/bevy-react/lib/components/nav/Nav';
import BoldLogo from '../logo.svg';

function Header() {
  return (
    <header className="mainHeader">

      <nav className="mainNav">
        <div className="mainLeft">
          <p><img src={BoldLogo} alt="React Logo" />Internal Hub</p>
        </div>

        <Nav type="tabs" aria-label="three link nav">
          <Nav.Divider />
          <ul className="mainRight">
            <li className="userName" label="{Username}" onClick={e => e.preventDefault()} aria-label="first-nav-item">
              <img src={BoldLogo} alt="username-image" /><a href="#">Username</a>
            </li>
          </ul>
        </Nav>
      </nav>
    </header>
  )
}

export default Header;


