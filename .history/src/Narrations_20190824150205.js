import React from 'react';
import Content from './Content';

const Narrations = props => {
  console.log(props);
  return <Content page={props.location.state.page} />;
};

export default Narrations;
