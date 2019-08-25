import React from 'react';
import Content from './Content';

const Main = props => {
  console.log(props.location.state);
  return <Content page={props.location.state.page} />;
};

export default Main;
