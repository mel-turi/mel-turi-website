import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <nav className='nav-wrapper'>
        <div className='title'>Mel Turi</div>
        <div className='main-navigation'>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: '/',
                  state: { page: 'home' }
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: '/about',
                  state: { page: 'about' }
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/narrations'>Narrations</NavLink>
            </li>
            <li>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
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
