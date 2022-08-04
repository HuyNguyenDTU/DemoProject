import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';

import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';

import 'antd/dist/antd.css';
import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SiderRight from './SiderRight';
import NavBarTop from './NavBarTop';
import Product from './Product';
import Management from './Management';
import ProductDetail from './ProductDetail';
import EditProduct from './EditProduct';
const { Header, Content, Sider } = Layout;

const ContainerTest = () => (
  <Layout style={{width:'100vw'}}>
    <Router>
    <NavBarTop/>
    <Layout style={{ width:'100vw' }}>
      <Sider style={{width:'20vw' ,backgroundColor:'white'}}  className="site-layout-background">
        <SiderRight/>
      </Sider>
      <Layout
        style={{
          minHeight:'600px',
          padding: '0 24px 24px',
        }}
      >
        
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div>
            
              <Routes>
              <Route path="/" element={<Product/>}></Route>
              <Route path="/home" element={<Product/>}></Route>
              <Route path="/management" element={<Management/>}></Route>
              <Route path="/product-detail" element={<ProductDetail/>}></Route>
              <Route path="/edit" element={<EditProduct/>}></Route>
              </Routes>
            
            </div>         
        </Content>
      </Layout>
    </Layout>
    </Router>
  </Layout>
);

export default ContainerTest;