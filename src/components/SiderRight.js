import React,{useState} from "react";
import { Select } from 'antd';
import { Layout } from 'antd';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from "react-router-dom";
const {  Sider } = Layout;
const { Option } = Select;



function SiderRight() {
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
        <Sider width={200} className="site-layout-background">
                    {/*<DropdownButton id="dropdown-item-button" title="Danh mục">
                        
                         <Dropdown.Item as="button">Action</Dropdown.Item>
                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                        {arr.map( (item) => (
                            <Dropdown.Item as="button" > {item} </Dropdown.Item>
                        ) ) }
                    </DropdownButton> */}
                {/* Đang lỗi tất cả danh mục */}
                <Select style={{width:'100%'} } value={selectedCate} onChange={onchangeCate}>
                        {danhMuc.map((item)=>(
                            <Option value={item}>{item}</Option>
                        ))}
                </Select> 
                <Select style={{width:'100%'} } value={selectedHang} onChange={onchangeHang}>
                        {hangSX.map((item)=>(
                            <Option value={item}>{item}</Option>
                        ))}
                </Select> 
                
        </Sider>
     );
}

export default SiderRight;