import React from 'react';
import axios from 'axios';
import { Layout, Menu, Breadcrumb,Form, Input, Button, Row, Col } from 'antd';
import {Link} from 'react-router-dom'
const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component{
  handleFormLayoutChange = e => {
    e.preventDefault();
    this.setState({
      formLayout: e.target.elements.emaile.value
    })
     return axios.post('/emails/',{
      email:e.target.elements.emaile.value
  },
  )
  .then(res => console.log(res))
  .catch(error => console.error(error));
  };

  render(){
return (
<Layout className="layout">
    <Header>
         <Form onSubmit={this.handleFormLayoutChange}  >
      <Row type="flex" justify="end" align="middle"  style={{ lineHeight: '64px' }}>
      <Col span={4}> <Input  type="email" id="emaile" name="emaile" placeholder="Enter your email to subscribe"/></Col>
      <Col span={2}><Button style={{ margin:'0 0 0 2px'}} type="primary" htmlType="submit">OK</Button></Col>
    </Row>
         
        </Form>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to="/article">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/article">List</Link></Breadcrumb.Item>
      
      </Breadcrumb>

      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {this.props.children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);


}
}

export default CustomLayout;