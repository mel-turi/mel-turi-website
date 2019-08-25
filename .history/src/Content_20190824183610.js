import React, { useState } from 'react';

const Content = () => {
  const [item1, setItem1] = useState({});
  const [item2, setItem2] = useState({});
  const [item3, setItem3] = useState({});
  const [pageInfo, setPageInfo] = useState({});

  return (
    <main className={pageInfo.class}>
      <div className={item1.class}>
        <h1>{item1.title}</h1>
        <p>{item1.content}</p>
      </div>
    </main>
  );
};

export default Content;
