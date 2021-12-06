import React from 'react';

//components
const NewsListItem=({item})=>{
    return(
        <div className='news-item'>
            <h3><span>{item.id}. </span>{item.title}</h3>
            <div>{item.feed}</div>
            
        </div>
    )
}
export default NewsListItem;