import React from 'react';
import Content from './Content';

const item1 = {
  title: 'Big Title',
  content: 'Big Title Text',
  class: ''
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
  class: '',
  secondary: ''
};

const Main = () => {
  return (
    <Content item1={item1} item2={item2} item3={item3} pageInfo={pageInfo} />
  );
};

export default Main;
