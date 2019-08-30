import React from 'react';

const Content = props => {
  return (
    <main>
      {/* <div className={props.containerpage}>
        <div className={props.item1.class}>
          <h1>{props.item1.title}</h1>
          <p>{props.item1.content}</p>
        </div> */}
      <div className='item-2-container'>
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
      {/* </div> */}
    </main>
  );
};

export default Content;
