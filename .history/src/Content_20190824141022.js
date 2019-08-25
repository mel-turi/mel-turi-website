import React from 'react';

const Content = props => {
  console.log(props);

  let state = {
    item1: '',
    item2: ''
  };

  if (props.page === 'home') {
    state = {
      page: 'main-container home',
      item1: 'big-title',
      item2: 'testimonials',
      content1header: 'Big Title',
      content1paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt aperiam temporibus possimus architecto. Quia, illum!'
    };
  }

  return (
    <main>
      <div className={state.page}>
        <div className={state.item1}>
          <h1>{state.content1header}</h1>
          <p>{state.content1paragraph}</p>
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
