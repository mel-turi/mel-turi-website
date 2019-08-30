import React from 'react';
import Content from './Content';

const item1 = {
  title: 'Blog Post 1',
  content: 'Blog Post 1 Text',
  class: 'blog1'
};
const item2 = {
  title: 'Blog Post 2',
  content: 'Blog Post 2 Text',
  class: 'blog2'
};
const item3 = {
  title: 'Blog Post 3',
  content: 'Blog Post 3 Text',
  class: 'blog3'
};
const pageInfo = {
  class: 'blog-primary',
  secondary: 'blog-secondary'
};

const Blog = () => {
  return (
    <Content item1={item1} item2={item2} item3={item3} pageInfo={pageInfo} />
  );
};

export default Blog;
