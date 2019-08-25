import React, { useState, useEffect } from 'react';

const Content = props => {
  const [item1, setItem1] = useState({});
  const [item2, setItem2] = useState({});
  const [item3, setItem3] = useState({});
  const [pageInfo, setPageInfo] = useState({});

  console.log(props);

  useEffect(props => {
    setItem1({
      item1: props.item1
    });
    setItem2({
      title: '',
      content: '',
      class: ''
    });
    setItem3({
      title: '',
      content: '',
      class: ''
    });
    setPageInfo({
      class: '',
      secondary: ''
    });
  }, []);

  return (
    <main className={pageInfo.class}>
      <div className={item1.class}>
        <h1>{item1.title}</h1>
        <p>{item1.content}</p>
      </div>
      <aside className={pageInfo.secondary}>
        <div className={item2.class}>
          <h1>{item2.title}</h1>
          <p>{item2.content}</p>
        </div>
        <div className={item3.class}>
          <h1>{item3.title}</h1>
          <p>{item3.content}</p>
        </div>
      </aside>
    </main>
  );
};

export default Content;
