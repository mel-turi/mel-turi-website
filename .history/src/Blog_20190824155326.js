import React from 'react';
import Content from './Content';

const Blog = props => {
  return <Content state={props.state} page={props.page} />;
};

export default Blog;
