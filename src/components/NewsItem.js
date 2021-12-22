import React, { useCallback } from 'react';
import './News.css';

const NewsItem = ({value}) => {
    
    const clickHandler = useCallback((e)=> {
        window.open(value.url);
    }, [value])

    return(
        <div className='NewsItem' onClick={clickHandler}>
            <div className='photoImage'>
                {/* <img src={value.urlToImage}></img> */}
            </div>
            <div className='newsBody'>
                <h1>{value.title}</h1>
                <p>{value.description}</p>
                <small className='author'><strong>author</strong> : {value.author? value.author : 'unknown'}</small>
            </div>
            
        </div>
    )
}

export default NewsItem;