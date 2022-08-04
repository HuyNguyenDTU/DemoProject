import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';
const { Search } = Input;
const onSearch = (value) => console.log(value);

const SearchAntd = () => (
  <Space style={{ float:'right' }} direction="vertical">
    <Search placeholder="Tìm sản phẩm" onSearch={onSearch} enterButton />
  </Space>
);

export default SearchAntd;