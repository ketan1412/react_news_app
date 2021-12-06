import React from 'react';
//Component
import NewsListItem from './news_list_item';

const news_list=(props)=>{
    const items=props.news.map((item)=>{
        return(
            <NewsListItem key={item.id} item={item}/>
        )
    })
    return(
        <div>{items}</div>
    )
}

export default news_list;