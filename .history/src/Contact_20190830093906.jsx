import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';

const Contact = () => {
  // eslint-disable-next-line
  const [pageInfo, setPageInfo] = useContext(PageContext);
  useEffect(() => {
    setPageInfo({
      primaryContent: (
        <div className='contact-1'>
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
      ),
      secondaryContent: (
        <div className='contact-2'>
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
      ),
      pageTitle: 'contact'
    });

    // eslint-disable-next-line
  }, []);

  return <Content />;
};

export default Contact;
