import React from 'react';
import Content from './Content';

const item1 = {
  title: <h1>Fatal Pure & Simple</h1>,
  content: (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.audible.com/pd/Fatal-Pure-Simple-Audiobook/B07QMXN6XM?qid=1566766198&sr=1-2&pf_rd_p=e81b7c27-6880-467a-b5a7-13cef5d729fe&pf_rd_r=90J2AJP8GABRKWY40A08&ref=a_search_c3_lProduct_1_2'
    >
      <img src='https://m.media-amazon.com/images/I/51+g6IoLlmL._SL500_.jpg' />
    </a>
  ),
  class: 'book1',
  animated: true
};
const item2 = {
  title: <h3>Book 2 Title</h3>,
  content: (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.audible.com/pd/Fatal-Pure-Simple-Audiobook/B07QMXN6XM?qid=1566766198&sr=1-2&pf_rd_p=e81b7c27-6880-467a-b5a7-13cef5d729fe&pf_rd_r=90J2AJP8GABRKWY40A08&ref=a_search_c3_lProduct_1_2'
    >
      <img src='https://m.media-amazon.com/images/I/41H4KQommgL._SL500_.jpg' />
    </a>
  ),
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
