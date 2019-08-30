import React from 'react';
import Content from './Content';

const Contact = props => {
  console.log(props);
  return <Content page={props.state.page} />;
};

export default Contact;
