import React from 'react';
import Content from './Content';

const item1 = {
  title: 'Big Title',
  content: 'Big Title Text',
  class: 'big-title'
};
const item2 = {
  title: 'Testimonial',
  content: 'Testimonial Text',
  class: 'testimonial1'
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

const Main = () => {
  return (
    <Content item1={item1} item2={item2} item3={item3} pageInfo={pageInfo} />
  );
};

export default Main;
