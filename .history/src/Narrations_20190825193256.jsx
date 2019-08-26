import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';

const Narrations = () => {
  const [setPageInfo] = useContext(PageContext);
  // useEffect(() => {
  //   setPageInfo({
  //     primaryContent: (
  //       <a
  //         target='_blank'
  //         rel='noopener noreferrer'
  //         href='https://www.audible.com/pd/Fatal-Pure-Simple-Audiobook/B07QMXN6XM?qid=1566766198&sr=1-2&pf_rd_p=e81b7c27-6880-467a-b5a7-13cef5d729fe&pf_rd_r=90J2AJP8GABRKWY40A08&ref=a_search_c3_lProduct_1_2'
  //       >
  //         <img
  //           alt='book1'
  //           src='https://m.media-amazon.com/images/I/51+g6IoLlmL._SL500_.jpg'
  //         />
  //       </a>
  //     ),
  //     secondaryContent: (
  //       <a
  //         target='_blank'
  //         rel='noopener noreferrer'
  //         href='https://www.audible.com/pd/Bringing-Them-Back-Audiobook/B07PMT936P?qid=1566766198&sr=1-1&pf_rd_p=e81b7c27-6880-467a-b5a7-13cef5d729fe&pf_rd_r=90J2AJP8GABRKWY40A08&ref=a_search_c3_lProduct_1_1'
  //       >
  //         <img
  //           alt='book2'
  //           src='https://m.media-amazon.com/images/I/41H4KQommgL._SL500_.jpg'
  //         />
  //       </a>
  //     )
  //   });

  //   // eslint-disable-next-line
  // }, []);

  return <Content />;
};

export default Narrations;
