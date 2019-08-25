import React from 'react';
import Content from './Content';

const item1 = {
  title: <h1>Big Title</h1>,
  content: 'Big Title Text',
  class: 'big-title'
};
const item2 = {
  title: <h1>Testimonial</h1>,
  content: 'Testimonial Text',
  class: 'testimonial1'
};
const item3 = {
  title: '',
  content: '',
  class: ''
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
