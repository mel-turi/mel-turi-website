import React from 'react';
import Content from './Content';

const item1 = {
  title: <h1>About me</h1>,
  content: <p>Bio goes here</p>,
  class: 'about-me'
};
const item2 = {
  title: <h3> </h3>,
  content: <p> </p>,
  class: 'hide'
};
const item3 = {
  title: <h3> </h3>,
  content: (
    <img
      src='https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
      width='100px'
      alt='profile pic'
    />
  ),
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
