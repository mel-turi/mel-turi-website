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
    return this.state.containerpage;
  }

  render() {
    return (
      <main className={this.props.state.containerpage}>
        <h1>{setContent}</h1>
      </main>
    );
  }
}

export default Content;
