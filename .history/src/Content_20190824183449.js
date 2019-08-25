import React, { useState } from 'react';

const Content = () => {
  const [item1, setItem1] = useState({});
  const [item2, setItem2] = useState({});
  const [item3, setItem3] = useState({});
  const [pageInfo, setPageInfo] = useState({});

  return (
    <main className={pageInfo.class}>
      <h1 className={item1.class}>{item1.title}</h1>
      <p>{item1.content}</p>
    </main>
  );
};

export default Content;
