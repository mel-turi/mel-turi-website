import React, { useState, useEffect } from 'react';

const Content = props => {
  const [item1, setItem1] = useState({});
  const [item2, setItem2] = useState({});
  const [item3, setItem3] = useState({});
  const [pageInfo, setPageInfo] = useState({});

  useEffect(() => {
    setItem1({
      title: props.item1.title,
      content: props.item1.content,
      class: props.item1.class,
      animated: props.item1.animated
    });
    setItem2({
      title: props.item2.title,
      content: props.item2.content,
      class: props.item2.class,
      animated: props.item2.animated
    });
    setItem3({
      title: props.item3.title,
      content: props.item3.content,
      class: props.item3.class,
      animated: props.item3.animated
    });
    setPageInfo({
      class: props.pageInfo.class,
      secondary: props.pageInfo.secondary
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className='main-container'>
    <main className={pageInfo.class}>
      <div className={item1.class}>
          {item1.title}
          {item1.content}
        </div>
      <div className={pageInfo.secondary}>
        <div className={item2.class}>
          {item2.title}
          {item2.content}
        </div>
        <div className={item3.class}>
          {item3.title}
          {item3.content}
        </div>
      </div>
    </main>
    </div>
  );
};

export default Content;
