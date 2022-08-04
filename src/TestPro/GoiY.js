import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function GoiY(props) {
    const duLieu = props.duLieu;
    return ( 
        <Card>
      <Card.Img variant="top" className='photo' src={'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/7/24/745994/1.jpg'}/>
      
      <Card.Body>
        
        <Card.Title>{duLieu.title}</Card.Title>
        <Card.Text>
          {duLieu.Noidung}
        </Card.Text>
        {/* <Link to={'/home/?cate='+duLieu.id+'&id='+duLieu.title}><Button variant="primary">Go somewhere</Button></Link> */}
        <Link to={'/product-detail/?cate='+duLieu.id+'&id='+duLieu.title}><Button variant="primary">Chi tiết</Button></Link>
      </Card.Body>
      
    </Card>
     );
}

export default GoiY;