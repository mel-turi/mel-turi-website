import React from 'react';
import Content from './Content';

const Narrations = props => {
  return <Content state={props.state} />;
  return <Content state={props.state} page={props.page} />;
};

export default Narrations;