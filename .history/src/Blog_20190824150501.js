import React from 'react';
import Content from './Content';

const Blog = props => {
  console.log(props);
  return <Content page={props.state.page} />;
};

export default Blog;
