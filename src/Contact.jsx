import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';

const Contact = () => {
  // eslint-disable-next-line
  const [pageInfo, setPageInfo] = useContext(PageContext);
  useEffect(() => {
    setPageInfo({
      primaryContent: (
        <div className='contact-2'>
          <div className='contact2-contents'>
            <h1>Contact Mel</h1>
            <form
              name='contact'
              method='POST'
              data-netlify='true'
              data-netlify-recaptcha='true'
            >
              <input type='hidden' name='form-name' value='contact' />

              <label>First Name</label>
              <input
                type='text'
                id='fname'
                name='fname'
                placeholder='Your first name..'
              />
              <label>Last Name</label>
              <input
                type='text'
                id='lname'
                name='lname'
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
              <div>
                <div data-netlify-recaptcha='true'></div>
              </div>
              <input type='submit' value='Submit' />
            </form>
          </div>
        </div>
      ),
      secondaryContent: (
        <div className='contact-1'>
          <div className='contact1-contents'>
            <div>
              <ul>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='mailto:email@melturi.com?subject=Mail from melturi.com'
                  >
                    <i class='fa fa-envelope fa-2x'></i> email@melturi.com
                  </a>
                </li>
                <br />
                <hr />
                <h1>Follow Mel</h1>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.instagram.com/mel.turi'
                  >
                    <i className='fa fa-instagram fa-2x'></i> mel.turi
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.twitter.com/turimel'
                  >
                    <i className='fa fa-twitter fa-2x'></i> turimel
                  </a>
                </li>

                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.facebook.com/mel.turi.96'
                  >
                    <i className='fa fa-facebook-official fa-2x'></i>{' '}
                    mel.turi.96
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
