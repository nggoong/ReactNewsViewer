import React from 'react';
import './News.css';

const NewsItem = ({value}) => {
    

    return(
        <div className='NewsItem'>
            <div className='photoImage'>
                
            </div>
            <div className='newsBody'>
                <h1>{value.title}</h1>
                <p>{value.description}</p>
                <small>{value.author? value.author : 'unknown'}</small>
            </div>
            
        </div>
    )
}

export default NewsItem;