import { Button, Form, Input, InputNumber,Select } from 'antd';
import React from 'react';
import UploadDetail from './UploadDetail';
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
/* eslint-enable no-template-curly-in-string */

const Forms = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const handleChange = () => {
    
    
  };
  return (
    <div >

    <Form  {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name="product_name"
        label="ProductName"
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
        <Select options={categories} onChange={handleChange} />
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
        <Select options={manufacturers} onChange={handleChange} />
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
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Forms;