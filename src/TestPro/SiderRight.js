import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";


function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}


  


const SiderRight = () => {

  const [cates,setCates] = useState();
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/view-cate').then(res =>{
      let tmp = res.data.data;
      let data = [];
      tmp.forEach(item => {
          data.push([item.cate_name,item.id]);
      });
      setCates(data);
    }).catch(err=>console.log(err))
  },[]  );
  //lấy danh mục sản xuất từ api
  // const fetchData = () => {
  //    axios.get('http://127.0.0.1:8000/api/view-cate')
  //     .then(res => {
  //         let tmp = res.data.data;
  //         let data= [];
  //         tmp.forEach(item => {
  //             data.push([item.cate_name,item.id]);
  //         });
  //         console.log(data); 
  //       }
  //       )    
  // }
  // fetchData();
  // console.log(cates);
  //list danh mục sản phẩm
  const items1 = [
    getItem('Danh mục', 'cate',[
      getItem('All', 0),
      getItem('Oto', 1),
      getItem('Moto', 2)
    ])
  ];
  //list hãng sản xuất
  const items2 = [
      getItem('Hãng sản xuất', 'factory', [
          getItem('All', 0),
          getItem('Suzuki', 3),
          getItem('Honda', 4)
        ])
    ];
    
    const [selectedCate,setSelectedCate] = useState();
    const [selectedFac,setSelectedFac] = useState();
  const onClick1 = (e) => {
    setSelectedCate(e.key)
    setSelectedFac(0)
    console.log('click ', e.key);
  };
  const onClick2 = (e) => {
    console.log('click ', e.key,' selected cate'+selectedCate);
  };

  return (
    <div style={{width:'200px'}} >
        <Menu
      onClick={onClick1}
      mode="inline"
      defaultSelectedKeys={[0]}
      items={items1}> 
        </Menu>
        <Menu
      onClick={onClick2}
      defaultSelectedKeys={[0]}
      mode="inline"
      items={items2}> 
        </Menu>

    </div>
    
  );
};

export default SiderRight;