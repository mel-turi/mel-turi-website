import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.setState = {
      containerpage: 'bloopity'
    };
    console.log('test', this.state);
    return this.state;
  }

  render() {
    return (
      <main className={this.props.state.containerpage}>
        <h1>{this.props.state.containerpage}</h1>
      </main>
    );
  }
}

export default Content;
