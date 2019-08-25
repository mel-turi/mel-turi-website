import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import About from './About';
import Narrations from './Narrations';
import Blog from './Blog';
import Contact from './Contact';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      page: 'home',
      containerpage: 'main-container',
      item1: {
        class: '',
        title: '',
        content: ''
      },
      item2: {
        class: ''
      },
      item3: {
        class: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(page) {
    this.setState = {
      page: page,
      containerpage: 'main-container',
      item1: {
        class: '',
        title: '',
        content: ''
      },
      item2: {
        class: ''
      },
      item3: {
        class: ''
      }
    };
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='wrapper'>
            <Header />
            <Switch>
              <Route
                path='/'
                exact
                render={props => (
                  <Main {...props} page='home' state={this.state} />
                )}
              />
              <Route
                path='/about'
                render={props => (
                  <About {...props} page='about' state={this.state} />
                )}
              />
              <Route
                path='/narrations'
                render={props => (
                  <Narrations {...props} page='narrations' state={this.state} />
                )}
              />
              <Route
                path='/blog'
                render={props => (
                  <Blog {...props} page='blog' state={this.state} />
                )}
              />
              <Route
                path='/contact'
                render={props => (
                  <Contact {...props} page='contact' state={this.state} />
                )}
              />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
