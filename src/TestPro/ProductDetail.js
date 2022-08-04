import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useSearchParams } from "react-router-dom";
import CarouselDetail from "./ProductDetail/CarouselDetail";
import Detail from "./ProductDetail/Detail";
import CardBootstrap from "./CardBootstrap";


import GoiY from "./GoiY";

function ProductDetail() {
    const [search,setSearch]=useSearchParams();
    const data = [
        { id: 7, title: 'Title 7', Noidung: '7.Some quick example text to build on the card title and make up the bulk of the cards content.' },
        { id: 8, title: 'Title 7', Noidung: '7.Some quick example text to build on the card title and make up the bulk of the cards content.' },
        { id: 9, title: 'Title 7', Noidung: '7.Some quick example text to build on the card title and make up the bulk of the cards content.' }
    ]
    const id =search.get('id');
    if(id==null){
        return(
            <>EmptyPage</>
        );
    }else{
        return ( 
            <Container style={{ width:'100%',minHeight:'100vh', backgroundColor:'white' }}>
            <Row style={{ width:'100%',margin:'10px'}}>
              <Col  style={{ padding:'10px' }}>
              <h1>Product Name</h1>
              <h4>Product Category</h4>
              <h4>Product Manufacturer</h4>
              <h4>Product Price</h4>
              <p>
                <h4>Product description</h4>
                DetailProduct descriptionProduct descriptionProduct descriptionProduct descriptionProduct descriptionProduct description
                Product descriptionProduct description
                Product description
                Product descriptionProduct description
    
              </p>
            </Col>
              <Col style={{ padding:'10px' }}>
                    <CarouselDetail/>
              </Col>
            </Row>
            <h1>Gợi ý</h1>
            <Row style={{ width:'100%' }}>
                {data.map( (item)=>(
                    <Col key={item.id} ><GoiY duLieu={item}/> </Col>
                        
                    ))}
              {/* <Col style={{ backgroundColor:'blue' }}>  </Col>
              <Col style={{ backgroundColor:'blueviolet' }}> </Col>
              <Col style={{ backgroundColor:'violet' }}> </Col> */}
            </Row>
          </Container>
        );
    }
    
}

export default ProductDetail;