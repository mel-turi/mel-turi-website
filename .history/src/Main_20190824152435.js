import React from 'react';
import Content from './Content';

const Main = props => {
  console.log(props);
  return <Content state={props.location.state} />;
};

export default Main;
