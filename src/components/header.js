import React,{ Component } from 'react';
import '../css/styles.css'
class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            keyword: '',
            class:'non-active'
        }
    }
    
    changeHandler=(event)=>{
        if(event.target.value===''){
            this.setState({class:'non-active'});
        }else{
            this.setState({class:'active'});
        }
        this.setState({keyword:event.target.value})
    }
    render(){
        //INLINE STYLING
        // const styles={
        //     header:{
        //         background:'#03a9f4',
        //         textAlign:'center',
        //         fontFamily:'comic'
        //     },
        //     logo:{
        //         color:'#fff'
        //     }
        // }
        // return (
        //     <header style={styles.header}>
        //         <div style={styles.logo}>Logo</div>
        //         <input type='text'></input>
        //     </header>
        // )
        return (
            <header className={this.state.class}>
                <div className='logo'>Logo</div>
                <label>Search: </label>
                <input type='text' onChange={(event)=>{
                     this.changeHandler(event);
                     this.props.keywords(event);
                }}></input>
                {/* <p style={{color: '#fff',textDecoration:'underline'}}>Keyword: {this.state.keyword}</p> */}
            </header>
        )
    }
}

export default Header;