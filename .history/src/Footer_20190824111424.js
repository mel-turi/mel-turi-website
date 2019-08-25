import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='copyright'>&copy; Mel Turi</div>
        <div className='social-footer'>
          <ul>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.instagram.com/turimel'
              >
                <i className='fa fa-instagram'></i>
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.twitter.com/'
              >
                <i className='fa fa-twitter'></i>
              </a>
            </li>

            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.facebook.com/'
              >
                <i className='fa fa-facebook-official'></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
