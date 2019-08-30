import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super();
  }

  content() {
    switch (this.props.page) {
      case about:
        text = 'about from case';
        break;
      case narration:
        text = 'narration from case';
        break;
      case blog:
        text = 'blog from case';
        break;
      case contact:
        text = 'contact from case';
        break;
      default:
        text = 'home from case';
        break;
    }
  }

  render() {
    return (
      <main className={this.props.state.containerpage}>
        <h1>{this.content}</h1>
      </main>
    );
  }
}

export default Content;
