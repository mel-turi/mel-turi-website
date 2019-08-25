import React from 'react';
import Content from './Content';

const Main = props => {
  return <Content state={props.location.state} />;
};

export default Main;
