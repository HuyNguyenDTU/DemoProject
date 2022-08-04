import { Button, Modal } from 'antd';
import React, { useState,useEffect } from 'react';
import { Form, Input, InputNumber,Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import {  Upload } from 'antd';


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */
  const manufacturers = [
      {
        label: 'Honda',
        value: 'Honda',
      },
      {
        label: 'Suzuki',
        value: 'Suzuki',
      },
    ];
    const categories = [
      {
        label: 'O to',
        value: 'O to',
      },
      {
        label: 'Mo to',
        value: 'Mo to',
      },
    ];
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
const ModalAntd = () => {
  //Categories and Manufacture and fileUpload
  
  const [cates,setCates] = useState();
  const [manufacs,setManufacs] = useState();
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/view-all-cate').then(res =>{
      let tmp = res.data;
      let data = [];
      tmp.forEach(item => {
          data.push({
            label: item.cate_name,
            value: item.id,
          });
      });
      setCates(data);
      
    }).catch(err=>console.log(err))
  },[]  );
  const [displayManu,setDisplayManu] = useState(true);
  //upload
  const [fileList, setFileList] = useState([]);
  
  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  

  const onFinish = (values) => {
    console.log(values);
    let formData = new FormData();
    formData.append('product_name',values.product_name);
    formData.append('manufac_id',values.Manufacturers);
    formData.append('price',values.price);
    formData.append('desc',values.description);
    formData.append('image',fileList[0]);
    axios(
     {
      url:'http://127.0.0.1:8000/api/add-product',
      method:'post',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
     } 
    ).then(
      (res)=>{
      }
    );
    console.log(Object.fromEntries([...formData]));
    setIsModalVisible(false);
  };
  
  const handleChangeCate = (value) => {
    console.log(value);
    //load hãng sản xuất
    axios.get('http://127.0.0.1:8000/api/getManufacturersByCateId/'+value).then(res =>{
          let tmp = res.data;
          let data = [];
          tmp.forEach(item => {
            data.push({
              label: item.manufac_name,
              value: item.id,
            });
        });
        setManufacs(data);
          // console.log(data);
        }).catch(err=>console.log(err));
    setDisplayManu(false);
  };
  
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Thêm sản phẩm
      </Button>
      <Modal width={600} title="Thêm sản phẩm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form  {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name="product_name"
                label="Tên sản phẩm"
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="Categories"
                label="Danh mục sản phẩm"
                rules={[
                {
                    required: true,
                    message: 'Chọn danh mục sản phẩm',
                },
                ]}
            >
                <Select options={cates} onChange={handleChangeCate} />
            </Form.Item>
            <Form.Item
                name="Manufacturers"
                label="Hãng sản xuất"
                rules={[
                {
                    required: true,
                    message: 'Chọn hản sản xuất',
                },
                ]}
            >
                <Select disabled={displayManu} options={manufacs} />
            </Form.Item>
            <Form.Item
                name="price"
                label="Giá sản phẩm"
                rules={[
                {
                    required: true,
                    type: 'number',
                    min: 10000,
                    max: 1000000000,
                },
                ]}
            >
                <InputNumber style={{
            width: 200,
            }} />
            </Form.Item>
            <Form.Item name="description" label="Mô tả sản phẩm"
            rules={[
                {
                type: 'string',
                min: 0,
                max: 500,
                },
            ]}
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item label="Ảnh minh họa">
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
                
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
      </Modal>
    </>
  );
};

export default ModalAntd;