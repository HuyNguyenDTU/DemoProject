import { Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const CardAntd = () => (
    <Link style={{ textDecorationLine:'none' }} to={'/detail'}>
  <Card
    hoverable
    style={{
      width: 240,
      margin:'10px'
    }}
    cover={<img style={{ height:'180px' }} alt="example" src="https://vcdn-vnexpress.vnecdn.net/2018/02/21/ferrari-488-pista-4-1519203262-1349-1519203899.jpg" />}
  >
    <h3>Product Name</h3>
    <h6>Price</h6>
  </Card>
  </Link>
);

export default CardAntd;