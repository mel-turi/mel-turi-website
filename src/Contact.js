import React from 'react';
import Content from './Content';

const item1 = {
  title: <h1> </h1>,
  content: (
    <form>
      {' '}
      <p>Form goes here</p>
    </form>
  ),
  class: 'contact-form'
};
const item2 = {
  title: <h1>Contact Mel</h1>,
  content: (
    <ul>
      <li>instagramhandle</li>
      <li>twitterhandle</li>
      <li>facebookhandle</li>
    </ul>
  ),
  class: 'contact-mel'
};
const item3 = {
  title: <h3> </h3>,
  content: <p> </p>,
  class: 'hide'
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
