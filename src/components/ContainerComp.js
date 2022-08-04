import { Layout,state,Select } from 'antd';
import Reac,{useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import TestBody from './TestBody';
import Navbar from 'react-bootstrap/Navbar';
import ProductDetail from './ProductDetail';
import Card from 'react-bootstrap/Card';
import Management from './Management';
import SiderRight from './SiderRight';
import Home from './Home';
import Dropdown from 'react-bootstrap/Dropdown';
import MenuSider from './MenuSider';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import axios from 'axios';
import CardPro from './CardPro';
const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;



function ContainerComp(){
//     axios.get('http://127.0.0.1:8000/api/test')
//   .then((response) => console.log(response.data))
//   .catch((error) => console.log(error));

    

    // const [searchparams,setSearchParams] = useSearchParams();
    /*test siderright*/ 
    const [selectedHang,setSelectedHang] = useState('Tất cả');
    const [selectedCate,setSelectedCate] =  useState('Tất cả');
    const [hangSX,setHang] = useState(['Tất cả']);
    const hangSxXeMay = ['Tất cả','Honda','Suzuki'];
    const hangSxOto = ['Tất cả','Ferrarie','Toyota'];
    const [danhMuc,setDanhMuc] = useState(['Tất cả','Xe máy','Ô tô']) ;
    const onchangeCate = (value)=>{
            
        if(value===danhMuc[0]){
            setHang(['Tất cả']);
            setSelectedHang('Tất cả');
            value=['Tất cả'];
        }
        setSelectedCate(value);
        if(value==='Xe máy'){
            setHang(hangSxXeMay);
            setSelectedHang(hangSX[0]);
        }
            
        if(value==='Ô tô'){
            setHang(hangSxOto);
            setSelectedHang(hangSX[0]);
        }
        <Link to={'/home/'+value}></Link>
        console.log(value);
    }
    const onchangeHang = (value)=>{
        setSelectedHang(value);
        console.log(selectedCate+' '+ value);
    }
    return (
    <Layout>
        <Router>
        <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to={'/home'} >NCC</Navbar.Brand>
                <Nav className="me-auto">
                    
                    <Nav.Link as={Link} to={'/home'} >Product</Nav.Link>
                    <Nav.Link as={Link} to={'/management'} >Management</Nav.Link>
                </Nav>
                </Container>
                </Navbar>
        
        
        <Layout>
            {/* <Sider width={200} className="site-layout-background">
                    <DropdownButton id="dropdown-item-button" title="Dropdown button">
                        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                        <Dropdown.Item as="button">Action</Dropdown.Item>
                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                    </DropdownButton>
            </Sider> */}
            {/* <SiderRight/> */}
            <Sider width={280} className="site-layout-background">
                    {/*<DropdownButton id="dropdown-item-button" title="Danh mục">
                        
                         <Dropdown.Item as="button">Action</Dropdown.Item>
                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                        {arr.map( (item) => (
                            <Dropdown.Item as="button" > {item} </Dropdown.Item>
                        ) ) }
                    </DropdownButton> */}
                {/* Đang lỗi tất cả danh mục */}
                {/* <Select style={{width:'100%'} } value={selectedCate} onChange={onchangeCate}>
                        {danhMuc.map((item)=>(
                            <Option key={item} value={item}></Option>
                        ))}
                </Select> 
                <Select style={{width:'100%'} } value={selectedHang} onChange={onchangeHang}>
                        {hangSX.map((item)=>(
                            <Option key={item} value={item}>{item}</Option>
                        ))}
                </Select>  */}
                <div>
                    <MenuSider/>
                </div>

                
        </Sider>
            <Content style={{ padding: '0 24px', minHeight: 480 }}>
                <div>
                                  
                            <Routes>
                                <Route path="/" element={<Home/>}></Route>
                                <Route path="/home" element={<Home/>}></Route>
                                {/* <Route path="/home/:id" element={<Home/>}></Route> */}
                                {/* <Route path="/test/{id}" element={<TestBody name={{id}}/>}></Route> */}
                                <Route path="/management" element={<Management/>}></Route>
                                <Route path="/product-detail" element={<ProductDetail/>}></Route>
                                <Route path="*" element={<div>No</div>}></Route>
                            </Routes>
                        
                </div>         
            </Content>
        </Layout>
        </Router>
    </Layout>
    );
}
export default ContainerComp;