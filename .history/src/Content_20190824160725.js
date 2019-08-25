import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }

  componentDidMount() {
    this.setState = {
      containerpage: 'bloopity'
    };
    return this.props.state.containerpage;
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
