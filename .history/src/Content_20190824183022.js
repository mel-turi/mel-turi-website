import React from 'react';



const Content = () => {


  const [item1, setItem1] = useState({})
  const [item2, setItem2] = useState({})
  const [item3, setItem3] = useState({})
  const [pageInfo, setPageInfo] = useState({})

  

  render() {
    return (
      <main className={item1.class}>
        <h1>{item1.class}</h1>
      </main>
    );
  }
}

export default Content;
