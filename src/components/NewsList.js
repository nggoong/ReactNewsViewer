import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import { getAllNews, getChosedNews } from '../APIFunc/apiFunc';
import './News.css';


const NewsList = ({category}) => {
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


    useEffect(()=> {
        console.log(category);
        console.log('hihi');
        if(category == 'headline'){
            getAllNews()
        .then((res)=> {
            console.log(res.data.articles);
            setNews(res.data.articles);
        })
        .catch((e)=> {
            console.log(e);
            alert('불러오기 실패');
        })
        }
        else {
            getChosedNews(category).then((res)=> {
                setNews(res.data.articles);
            }).catch((e)=> {
                console.log(e);
                alert('불러오기 실패');
            })
        } 
        // category == 'headline'? getAllNews():getChosedNews(category);
    }, [category])

    
    return(
        <div className='newsList'>
            {news.map(
                (value, index) => {return(<NewsItem value={value} key={index}></NewsItem>)}
            )}

            
        </div>
    )
}

export default NewsList;