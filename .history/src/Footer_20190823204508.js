import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='copyright'>&copy; Mel Turi</div>
        <div className='social-footer'>
          <a href='https://www.facebook.com/'>
            <i className='fa fa-facebook-official'></i>
          </a>
          <a href='https://www.instagram.com/'>
            <i className='fa fa-instagram-official'></i>
          </a>
          <a href='https://www.facebook.com/'>
            <i className='fa fa-facebook-official'></i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
