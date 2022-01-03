import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import { getAllNews, getChosedNews } from '../APIFunc/apiFunc';
import './News.css';


const NewsList = ({category}) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(()=>{
    //     getAllNews()
    //     .then((res)=> {
    //         console.log(res.data.articles);
    //         setNews(res.data.articles);
    //     })
    //     .catch((e)=> {
    //         console.log(e);
    //         alert('불러오기 실패');
    //     })
    // }, [])
    const fetchAllData = async () => {
        setLoading(true);
        try {
            const res = await getAllNews();
            setNews(res.data.articles);
        }
        catch(e) {
            console.log(e);
        }
        setLoading(false);
    }

    const fetchCategoryData = async () => {
        setLoading(true);
        try {
            let res;
            if(category == 'headline') {
                res = await getAllNews();
            }
            else {
                res = await getChosedNews(category);
            }
            setNews(res.data.articles);
        }
        catch(e) {
            console.log(e);
        }
        setLoading(false);
    }
    

    useEffect(()=> {
        fetchAllData();
    }, []);

    useEffect(()=> {
        fetchCategoryData();
    }, [category])


    // useEffect(()=> {
    //     console.log(category);
    //     console.log('hihi');
    //     if(category == 'headline'){
    //         getAllNews()
    //     .then((res)=> {
    //         console.log(res.data.articles);
    //         setNews(res.data.articles);
    //     })
    //     .catch((e)=> {
    //         console.log(e);
    //         alert('불러오기 실패');
    //     })
    //     }
    //     else {
    //         getChosedNews(category).then((res)=> {
    //             setNews(res.data.articles);
    //         }).catch((e)=> {
    //             console.log(e);
    //             alert('불러오기 실패');
    //         })
    //     } 
    //     // category == 'headline'? getAllNews():getChosedNews(category);
    // }, [category])

    if(loading) {
        return(
            <div className='loading-container'>
                <h1>로딩중...☺</h1>    
            </div>
            
        )
    }

    
    return(
        <div className='newsList'>
            {news.map(
                (value, index) => {return(<NewsItem value={value} key={index}></NewsItem>)}
            )}

            
        </div>
    )
}

export default NewsList;