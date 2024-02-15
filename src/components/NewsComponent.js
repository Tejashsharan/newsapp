import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

const NewsComponent = (props) => {

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading ,setLoading]=useState(true);

  const today = new Date().toISOString().split('T')[0];
  const fetchData = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=cffcc7fb2ea646c9aa6b13cf1050a85f&category=${props.category}&page=${page}&pageSize=${props.pageSize}&from=${today}`);
    const data = await res.json();
    console.log("API Response:", data);
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setPage(page+1)
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchMoreData = async() => {
    setLoading(true);
    console.log("Current page:", page);
    setPage(page + 1);
    const res=await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=cffcc7fb2ea646c9aa6b13cf1050a85f&category=${props.category}&page=${page}&pageSize=${props.pageSize}&from=${today}`)
    const data=await res.json();
    setArticles(articles.concat(data.articles))
    setLoading(false);
  };
  

  return (
    <div className='container'>
      <h2 style={{textAlign:'center'}}>Top {props.category.split("")[0].toUpperCase()+props.category.slice(1)} News Headlines</h2>
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles!==totalResults}
      loader={<div className='container' style={{display:'flex',justifyContent:'center'}}><Spinner loading={loading}/></div>}
      style={{overflow:'hidden'}}
    >
      <div className='container mx-2 my-2' style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', minHeight: '100px' }}>
        {articles.map((article, index) => (
          <NewsItem article={article} key={index} />
          ))}
      </div>
    </InfiniteScroll>
    </div>
  );
};

export default NewsComponent;


