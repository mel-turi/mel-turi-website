import React from 'react';
import Content from './Content';

const item1 = {
  title: 'About me',
  content: 'Bio goes here',
  class: 'about-me'
};
const item2 = {
  title: '',
  content: '',
  class: ''
};
const item3 = {
  title: '',
  content: '',
  class: ''
};
const pageInfo = {
  class: 'big-title',
  secondary: 'testimonial'
};

const About = () => {
  return (
    <Content item1={item1} item2={item2} item3={item3} pageInfo={pageInfo} />
  );
};

export default About;
