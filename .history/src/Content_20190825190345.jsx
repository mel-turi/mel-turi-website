import React, { useState, useEffect, useContext } from 'react';
import { PageContext } from './PageContext';

const Content = () => {
  const [pageInfo, setPageInfo] = useContext(PageContext);

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

  return <main className='main-container'>{value}</main>;
};

export default Content;
