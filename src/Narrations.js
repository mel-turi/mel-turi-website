import React from 'react';
import Content from './Content';

const item1 = {
  title: <h1>Book 1 Title</h1>,
  content: <p>Book 1 Info</p>,
  class: 'book1'
};
const item2 = {
  title: <h3>Book 2 Title</h3>,
  content: <p>Book 2 Info</p>,
  class: 'book2'
};
const item3 = {
  title: <h3> </h3>,
  content: <p> </p>,
  class: 'hide'
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
