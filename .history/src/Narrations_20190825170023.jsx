import React from 'react';
import Content from './Content';

const item1 = {
  title: <h1>Fatal Pure & Simple</h1>,
  content: (
    <a href=''>
      <img src='https://m.media-amazon.com/images/I/51+g6IoLlmL._SL500_.jpg' />
    </a>
  ),
  class: 'book1',
  animated: true
};
const item2 = {
  title: <h3>Book 2 Title</h3>,
  content: <p>Book 2 Info</p>,
  class: 'book2',
  animated: true
};
const item3 = {
  title: <h3> </h3>,
  content: <p> </p>,
  class: 'hide',
  animated: false
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
