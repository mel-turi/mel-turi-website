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
      item1: {
        class: 'big-title',
        title: 'Big title',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus qui doloremque reiciendis, animi cum est incidunt pariatur non impedit veniam!'
      },
      item2: 'testimonials'
    };
  }

  return (
    <main>
      <div className={state.page}>
        <div className={state.item1.class}>
          <h1>{state.item1.title}</h1>
          <p>{state.item1.content}</p>
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
