import React from 'react';
import Content from './Content';
const pageFlip = () => {
  if (props.location.state === 'main') {
    return <Content page='main' />;
  } else {
    return <Content />;
  }
};
const Main = props => {
  return <div>{pageFlip}</div>;
};

export default Main;
