import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <nav>
        <div className='title'>Mel Turi</div>
        <div className='main-navigation'>
          <ul>
            <li></li>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/narrations'>Narrations</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <a href='https://www.acx.com/narrator?p=AI0XTZMVU6YKG'>
                ACX Page
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
