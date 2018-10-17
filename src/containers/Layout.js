import { Layout, Menu, Breadcrumb } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import if_movie06_1277187 from '../css/if_movie06_1277187.svg';

const { Header, Content, Footer } = Layout;

class CustomLayout extends Component {
  render() {
    return (
  
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
      <Menu.Item key="1">The Robert Times</Menu.Item>
        <Menu.Item key="2"><Link to="/">Articles</Link></Menu.Item>
        
        <img className="choco"
            src={if_movie06_1277187} width="100" height="50" />
        
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
    
     
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {this.props.children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      RLA Design ©2018 Created by RobertAnchondo Solutions.
    </Footer>
  </Layout>
);
}
}

export default CustomLayout;
