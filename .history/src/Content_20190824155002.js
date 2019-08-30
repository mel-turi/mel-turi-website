import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }

  render() {
    return <main className={this.props.state.page}></main>;
  }
}

export default Content;
