import React from 'react';
import Content from './Content';

const item1 = {
  title: 'Book 1 Title',
  content: 'Book 1 Info',
  class: 'book1'
};
const item2 = {
  title: 'Book 2 Title',
  content: 'Book 2 Info',
  class: 'book2'
};
const item3 = {
  title: '',
  content: '',
  class: ''
};
const pageInfo = {
  class: 'narrations-primary',
  secondary: 'narrations-secondary'
};

const Narrations = () => {
  return (
    <Content item1={item1} item2={item2} item3={item3} pageInfo={pageInfo} />
  );
};

export default Narrations;
