import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//Components
import Header from './components/header';
import JSON from './db.json'
import NewsList from './components/news_list';
// const App= () => <h1>
//                 <Header/>
//                 </h1>;
class App extends Component{
    constructor(props){
        super(props)
        this.state={
            news: JSON,
            filtered_news:[]
        }
    }
    getKeywords=(event)=>{
        let keywords=event.target.value;
        let filtered=this.state.news.filter((item)=>{
            return item.title.indexOf(keywords)>-1
        })
        this.setState({filtered_news:filtered})
    }
    render(){
        let allNews=this.state.news;
        let filteredNews=this.state.filtered_news;
        return(
            
            <div>
            <h1>
                <Header keywords={this.getKeywords} />
            </h1>
            <div>
                <NewsList news={filteredNews.length===0?allNews:filteredNews} />
            </div>
            </div>
        )
    }
}
ReactDOM.render(<App />,document.querySelector('#root'));