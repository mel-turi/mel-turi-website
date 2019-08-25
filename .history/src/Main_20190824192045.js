import React from 'react';
import Content from './Content';

const item1 = {
  title: <h1>Big Title</h1>,
  content: <p>Big Title Text</p>,
  class: 'big-title'
};
const item2 = {
  title: <h1>Testimonial</h1>,
  content: <p>Testimonial Text</p>,
  class: 'testimonial1'
};
const item3 = {
  title: <h1></h1>,
  content: <p></p>,
  class: 'hide'
};
const pageInfo = {
  class: 'home-primary',
  secondary: 'home-secondary'
};

const Main = () => {
  return (
    <Content item1={item1} item2={item2} item3={item3} pageInfo={pageInfo} />
  );
};

export default Main;
