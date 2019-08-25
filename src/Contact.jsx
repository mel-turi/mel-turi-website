import React from 'react';
import Content from './Content';

const item1 = {
  title: <h1> </h1>,
  content: (

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
  ),
  class: 'contact-form',
  animated: true
};
const item2 = {
  title: <h1>Contact Mel</h1>,
  content: (
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
  ),
  class: 'contact-mel',
  animated: true
};
const item3 = {
  title: <h3> </h3>,
  content: <p> </p>,
  class: 'hide',
  animated: false
};
const pageInfo = {
  class: 'contact-primary',
  secondary: 'contact-secondary'
};

const Contact = () => {
  return (
    <Content item1={item1} item2={item2} item3={item3} pageInfo={pageInfo} />
  );
};

export default Contact;
