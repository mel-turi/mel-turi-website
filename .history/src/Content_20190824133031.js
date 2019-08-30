import React, { Component } from 'react';

const Content = props => {
  return (
    <main>
      <div className='main-container'>
        <div className='big-title'>
          <h1>Big Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            doloremque reiciendis sit, deserunt atque magni.
          </p>
        </div>
        <div className='testimonial-1'>
          <h3 className='tt-1'>Testimonial 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            necessitatibus?
          </p>
        </div>
        <div className='testimonial-2'>
          <h3 className='tt-2'>Testimonial 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            necessitatibus?
          </p>
        </div>
      </div>
    </main>
  );
};

export default Content;
