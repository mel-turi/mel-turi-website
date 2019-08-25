import React from 'react';

const Content = props => {
  console.log(props);

  const state = {
    item1: '',
    item2: ''
  };

  if (props.page === 'home') {
    state = {
      item1: 'big-title',
      item2: ''
    };
  }

  return (
    <main>
      <div className='main-container'>
        <div
          // className={
          //   props.page === 'home'
          //     ? 'big-title'
          //     : props.page === 'about'
          //     ? 'about-me'
          //     : props.page === 'narrations'
          //     ? 'best-book'
          //     : props.page === 'blog'
          //     ? 'blog-container'
          //     : props.page === 'contact'
          //     ? 'contact-me'
          //     : ''
          // }
          className={state.item1}
        >
          <h1>Big Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            doloremque reiciendis sit, deserunt atque magni.
          </p>
        </div>
        <div className='item-2-container'>
          <div className='testimonial-1'>
            <h3 className='tt-1'>Testimonial 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, necessitatibus?
            </p>
          </div>
          <div className='testimonial-2'>
            <h3 className='tt-2'>Testimonial 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, necessitatibus?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
