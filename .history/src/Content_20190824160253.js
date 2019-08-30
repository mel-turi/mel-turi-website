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

  componentDidUpdate(prevProps) {
    //Typical usage, don't forget to compare the props
    if (this.props.page !== prevProps.page) {
      this.fetchData(this.props.page);
    }
  }

  render() {
    return (
      <main className={this.props.state.containerpage}>
        <h1>{}</h1>
      </main>
    );
  }
}

export default Content;
