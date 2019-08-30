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
      containerpage: 'main-container home',
      item1: {
        class: 'big-title',
        title: 'Big title',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus qui doloremque reiciendis, animi cum est incidunt pariatur non impedit veniam!'
      },
      item2: {
        class: 'testimonial1'
      },
      item3: {
        class: 'testimonial2'
      }
    };
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
                render={props => <Main {...props} page='home' />}
              />
              <Route path='/about' component={About} />
              <Route path='/narrations' component={Narrations} />
              <Route path='/blog' component={Blog} />
              <Route path='/contact' component={Contact} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
