import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Forms from "../Forms";
function EditProduct() {
    return ( 
        <>
            <Container style={{ width:'100%',minHeight:'100vh', backgroundColor:'white' }}>
                <Row>
                    <Col >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control type="email" placeholder="Nhập tên sản phẩm" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Select aria-label="Default select example">
                <option>Chọn danh mục sản phẩm</option>
                <option value="1">Ô tô</option>
                <option value="2">Xe gắn máy</option>
                <option value="3">Xe đạp</option>
            </Form.Select>
            <br></br>
                <Form.Select aria-label="Default select example">
                    <option>Chọn hãng sản xuất</option>
                    <option value="1">Ô tô</option>
                    <option value="2">Xe gắn máy</option>
                    <option value="3">Xe đạp</option>
                </Form.Select>
                <br></br>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Giá</Form.Label>
                <Form.Control type="email" placeholder="Nhập giá sản phẩm" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <br></br>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mô tả</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Nhập mô tả" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
                    
                    </Col>
                <Col>
                    Ảnh minh họa
                    <Row>
                        <img src={'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/7/24/745994/1.jpg'}></img>
                    </Row>
                    <Row>
                        {/* <Row>
                            <Col>Hình 1</Col>
                            <Col>Hình 2</Col>
                        </Row>
                        <Row>
                            <Col>Hình 3</Col>
                            <Col>Hình 4</Col>
                        </Row> */}
                        
                    </Row>
                </Col>
                </Row>
                
          </Container>
        </>
     );
}

export default EditProduct;