import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function CardBootstrap(props) {
    const duLieu = props.duLieu;
  return (
    
    <Card  style={{  width: '30%', margin:'10px' }}>
      <Card.Img variant="top"  />
      
      <Card.Body>
        
        <Card.Title>{duLieu.title}</Card.Title>
        <Card.Text>
          {duLieu.Noidung}
        </Card.Text>
        {/* <Link to={'/home/?cate='+duLieu.id+'&id='+duLieu.title}><Button variant="primary">Go somewhere</Button></Link> */}
        <Link style={{textDecoration: 'no'}} to={'/product-detail/?id='+duLieu.id}><Button variant="primary">Xem chi tiết</Button></Link>
      </Card.Body>
    </Card>
    
  );
}

export default CardBootstrap;