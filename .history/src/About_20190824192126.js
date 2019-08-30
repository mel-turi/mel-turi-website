import React from 'react';
import Content from './Content';

const item1 = {
  title: 'About me',
  content: 'Bio goes here',
  class: 'about-me'
};
const item2 = {
  title: <h1> </h1>,
  content: <p> </p>,
  class: 'hide'
};
const item3 = {
  title: <h1> </h1>,
  content: <p> </p>,
  class: 'hide'
};
const pageInfo = {
  class: 'about-primary',
  secondary: 'about-secondary'
};

const About = () => {
  return (
    <Content item1={item1} item2={item2} item3={item3} pageInfo={pageInfo} />
  );
};

export default About;
