import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function CardBootstrap(props) {
    const duLieu = props.duLieu;
  return (
    
    <Card  style={{  width: '30%', margin:'10px' , borderRadius:'10px'}} >
      <Card.Img variant="top" className='photo' src={'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/7/24/745994/1.jpg'}/>
      
      <Card.Body>
        
        <Card.Title>{duLieu.title}</Card.Title>
        <Card.Text>
          {duLieu.Noidung}
        </Card.Text>
        {/* <Link to={'/home/?cate='+duLieu.id+'&id='+duLieu.title}><Button variant="primary">Go somewhere</Button></Link> */}
        
        <Link to={'/edit'}><Button style={{margin:'5px',backgroundColor:'lightgreen'}} variant="success">Cập nhật</Button> </Link>
        <Button  style={{margin:'5px'}} variant="danger">Xóa</Button>
        <Link to={'/product-detail/?cate='+duLieu.id+'&id='+duLieu.title}><Button variant="primary">Chi tiết</Button></Link>
      </Card.Body>
      
    </Card>
    
  );
}

export default CardBootstrap;