import React from 'react';
import Content from './Content';

const item1 = {
  title: '',
  content: 'Contact form goes here',
  class: 'contact-form'
};
const item2 = {
  title: 'Contact Mel',
  content: (
    <ul>
      <li>test</li>
    </ul>
  ),
  class: 'contact-mel'
};
const item3 = {
  title: '',
  content: '',
  class: ''
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
