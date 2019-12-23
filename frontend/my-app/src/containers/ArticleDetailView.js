import React from 'react';
import axios from 'axios';

import {Card, Button} from 'antd';
import CustomForm from '../components/Form'
import { withRouter } from 'react-router-dom'

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
class ArticleDetail extends React.Component{

    state = {
        article:{}
    }

    componentDidMount(){
        const articleID = this.props.match.params.articleID;
        axios.get(`/api/article/${articleID}/`)
            .then(res => {
                this.setState({
                    article:res.data
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
    handleDelete = async(event) =>{
        event.preventDefault();
        const articleID = this.props.match.params.articleID;
        await axios.delete(`/api/article/${articleID}/`);
        this.props.history.push('/article');
    }

    render(){
        return(
            <div>
            <Card title={this.state.article.title}>
            <a href={`http://${this.state.article.link}`} target="_blank" rel="noopener noreferrer">{this.state.article.link}</a>
                <p>{this.state.article.description}</p>
            </Card>
            {this.state.is_Admin &&
            <>
            <CustomForm requestType="put" articleID={this.props.match.params.articleID} btnText="Update"/>
            <form onSubmit={this.handleDelete}>
            <Button type = "danger" htmlType="submit">Delete</Button>

            </form>
            </>
            }
            </div>
        );

    }



}
export default withRouter(ArticleDetail);