import React from 'react';
import Content from './Content';

const Main = props => {
  console.log(props.location);
  return (
  <Content page={props.location.state.page} />;
  )
};

export default Main;
