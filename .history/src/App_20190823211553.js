import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Content from './Content';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='wrapper'>
          <div className='bg-image'></div>
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
