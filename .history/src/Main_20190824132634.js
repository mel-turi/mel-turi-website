import React from 'react';
import Content from './Content';

const Main = props => {
  const pageFlip = () => {
    if (props.location.state === 'main') {
      return <Content page='main' />;
    } else {
      return <Content />;
    }
  };

  return <div>{pageFlip}</div>;
};

export default Main;
