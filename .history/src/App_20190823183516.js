import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Content from './Content';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
