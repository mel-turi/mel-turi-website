import React from 'react';
import Content from './Content';

const Main = props => {
  return (
    <div>
      <Content page={props.location.state.page} />
    </div>
  );
};

export default Main;
