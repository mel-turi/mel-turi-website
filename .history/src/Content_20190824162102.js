import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super();
  }

  picker() {
    if (this.props.page === 'about') {
      return 'about';
    } else {
      console.log('page', this.props);
    }
  }

  render() {
    return (
      <main className={this.props.state.containerpage}>
        <h1>{picker}</h1>
      </main>
    );
  }
}

export default Content;
