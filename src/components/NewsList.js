import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import { getAllNews } from '../APIFunc/apiFunc';
import './News.css';


const NewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(()=>{
        getAllNews()
        .then((res)=> {
            console.log(res.data.articles);
            setNews(res.data.articles);
        })
        .catch((e)=> {
            console.log(e);
            alert('불러오기 실패');
        })
    }, [])

    return(
        <div className='newsList'>
            {news.map(
                (value) => {return(<NewsItem value={value}></NewsItem>)}
            )}

            
        </div>
    )
}

export default NewsList;