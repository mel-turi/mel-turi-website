import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.setContent = this.setContent.bind(this);
  }

  setContent() {
    this.setState = {
      containerpage: 'bloopity'
    };
    return <h1>this.state.containerpage</h1>;
  }

  render() {
    return <main className={this.props.state.containerpage}>{setContent}</main>;
  }
}

export default Content;
