import React from 'react';

const NewsItem = ({value}) => {
    

    return(
        <div className='NewsItem'>
            <div className='photoImage'>
                
            </div>
            <div className='newsBody'>
                <h1>{value.title}</h1>
                <p>{value.contents}</p>
                <small>{value.day}</small>
            </div>
            
        </div>
    )
}

export default NewsItem;