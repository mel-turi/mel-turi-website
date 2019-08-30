import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';

import { Spring } from 'react-spring/renderprops';

const Contact = () => {
  // eslint-disable-next-line
  const [pageInfo, setPageInfo] = useContext(PageContext);
  useEffect(() => {
    setPageInfo({
      primaryContent: (
        <Spring
          from={{
            color: 'rgba(0,0,0,0)',
            opactiy: 0,
            marginBottom: -100,
            transform: 'translate3d(0,1000px,0) scale(1) rotateZ(-90deg)'
          }}
          to={{
            color: 'rgba(255, 232, 254,1)',
            opacity: 1,
            marginBottom: 0,
            transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)'
          }}
          config={{ duration: 300 }}
        >
          {props => (
            <div style={props} className='contact-2'>
              <div className='contact2-contents'>
                <h1>Contact me</h1>
                <form>
                  <label>First Name</label>
                  <input
                    type='text'
                    id='fname'
                    name='firstname'
                    placeholder='Your name..'
                  />
                  <label>Last Name</label>
                  <input
                    type='text'
                    id='lname'
                    name='lastname'
                    placeholder='Your last name..'
                  />
                  <label>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Your email..'
                  />
                  <label>Message</label>
                  <textarea
                    id='message'
                    name='message'
                    placeholder='Your message..'
                  ></textarea>
                  <input type='submit' value='Submit' />
                </form>
              </div>
            </div>
          )}
        </Spring>
      ),
      secondaryContent: (
        <div className='contact-1'>
          <div className='contact1-contents'>
            <div>
              <h1>Follow me</h1>
              <ul>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.instagram.com/mel.turi'
                  >
                    <i className='fa fa-instagram'></i> mel.turi
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.twitter.com/turimel'
                  >
                    <i className='fa fa-twitter'></i> turimel
                  </a>
                </li>

                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.facebook.com/mel.turi.96'
                  >
                    <i className='fa fa-facebook-official'></i> mel.turi.96
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
      pageTitle: 'contact'
    });

    // eslint-disable-next-line
  }, []);

  return <Content />;
};

export default Contact;
