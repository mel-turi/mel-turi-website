import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.setState = this.setState.bind(this);
  }

  setContent() {
    this.setState = {
      containerpage: 'bloopity'
    };
  }

  render() {
    return (
      <main className={this.props.state.containerpage}>
        <h1>{this.props.page}</h1>
      </main>
    );
  }
}

export default Content;
