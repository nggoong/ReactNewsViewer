import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import { getAllNews } from '../APIFunc/apiFunc';


const NewsList = () => {
    const [news, setNews] = useState([{
        title:'게시글 제목',
        contents:'게시글 내용',
        day:'게시글 날짜'
    },
    {
        title:'게시글 제목',
        contents:'게시글 내용',
        day:'게시글 날짜'
    },
    {
        title:'게시글 제목',
        contents:'게시글 내용',
        day:'게시글 날짜'
    },
    {
        title:'게시글 제목',
        contents:'게시글 내용',
        day:'게시글 날짜'
    }]);

    useEffect(()=>{
        getAllNews().then((res)=> {
            console.log(res);
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