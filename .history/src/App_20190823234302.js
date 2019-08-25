import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='wrapper'>
          <Header />
          <Switch>
            <Route path='/' exact component={Main} />
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

export default App;
