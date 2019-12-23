import React from 'react';
import axios from 'axios';
import Articles from '../components/Article';
import CustomForm from '../components/Form'

class ArticleList extends React.Component{

    state = {
        articles:[],
        is_Admin:false
    }

    componentDidMount(){
        axios.get('/api/article/')
            .then(res => {
                this.setState({
                    articles:res.data
                });

            })

            axios.get('/me/')
            .then(res => {
                console.log(res)
                this.setState({
                    is_Admin:res.data.is_superuser
                });
            })    
    }
   

    render(){
        return(
            <div>
        
                <Articles data={this.state.articles}/>
            <br/>
            {this.state.is_Admin && 
                <>
            <h2>Create an article</h2>
            <CustomForm requestType="post" articleID={null} btnText="Create"/>
            </> }
            </div>
        );
        }
    }



export default ArticleList;