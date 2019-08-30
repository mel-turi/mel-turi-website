import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';


const Contact = () => {
  const [pageInfo, setPageInfo] = useContext(PageContext);
  useEffect(() => {
    setPageInfo({
      primaryContent: (
        <div>
          <form>
    <label>First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
    <label>Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
    <label>Email</label>
    <input type="email" id="email" name="email" placeholder="Your email" />
    <label>Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
    <input type="submit" value="Submit" />
    </form>
        </div>
      ),
      secondaryContent: (
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
      )
    });

    // eslint-disable-next-line
  }, []);

  return <Content />;
};
};

export default Contact;
