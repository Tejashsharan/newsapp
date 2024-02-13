import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsComponent = (props) => {
  
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults,setTotalResults]=useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date().toISOString().split('T')[0];
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=cffcc7fb2ea646c9aa6b13cf1050a85f&page=${page}&pageSize=${props.pageSize}&from=${today}`);
      const data = await res.json();
      setArticles(data.articles);
      setTotalResults(data.totalResults);
    };
    fetchData();
  }, [page, props.pageSize]);

  function nextPage() {
    let totalpage=Math.ceil(totalResults/5);
    page<(totalpage)?setPage(page + 1):setPage(totalpage);
  }

  function prevPage() {
    page>1?setPage(page - 1):setPage(1);
  }

  return (
    <div className='container mx-2 my-2' style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', minHeight: '100px' }}>
      {articles.map((article, index) => (
        <NewsItem article={article} key={index} />
      ))}
      <h1 style={{ position: 'absolute', bottom: '0', left: '0', cursor: 'pointer' }} onClick={prevPage}>&#x2190;</h1>
      <h1 style={{ position: 'absolute', bottom: '0', right: '0', cursor: 'pointer' }} onClick={nextPage}>&#x2192;</h1>
    </div>
  );
};

export default NewsComponent;

