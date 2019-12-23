import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
const FormItem = Form.Item;

class CustomForm extends React.Component {

    handleFormSubmit = (event,requestType,articleID) =>{
        const title = event.target.elements.title.value;
        const link = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        switch(requestType){
            case 'post':
                return axios.post('/api/article/',{
                    title:title,
                    link:link,
                    description : description
                },
                this.props.history.push('/article'),
                )
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case 'put':
                    return axios.put(`/api/article/${articleID}/`,{
                        title:title,
                        link:link,
                        description : description
                    },
                    this.props.history.push('/article'),
                    )
                    .then(res => console.log(res))
                    .catch(error => console.err(error));
        }
    } 

  render() {
    return (
      <div>
        <Form onSubmit={(event)=>this.handleFormSubmit(
            event,
            this.props.requestType,
            this.props.articleID
            )}>
          <FormItem label="Title" >
            <Input name="title" placeholder="Put a title here" />
          </FormItem>
          <FormItem label="Link" >
            <Input name="link" placeholder="Enter some link..." />
          </FormItem>
          <FormItem label="Description" >
            <Input name="description" placeholder="Enter some description" />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default withRouter(CustomForm);