import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <nav className='nav-wrapper'>
        <div className='title'>Mel Turi</div>
        <div className='main-navigation'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/narrations'>Narrations</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <div className='button nav-button'>
              <li>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.acx.com/narrator?p=AI0XTZMVU6YKG'
                >
                  ACX Page
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
