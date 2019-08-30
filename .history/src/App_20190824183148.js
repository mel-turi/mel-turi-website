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

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='wrapper'>
          <Header />
          <Switch>
            <Route path='/' exact render={props => <Main {...props} />} />
            <Route path='/about' render={props => <About {...props} />} />
            <Route
              path='/narrations'
              render={props => <Narrations {...props} />}
            />
            <Route path='/blog' render={props => <Blog {...props} />} />
            <Route path='/contact' render={props => <Contact {...props} />} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
