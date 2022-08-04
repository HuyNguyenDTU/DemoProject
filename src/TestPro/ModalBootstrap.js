import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import UploadDetail from '../UploadDetail';
import Forms from '../Forms';

function ModalBootstrap() {
  const [show, setShow] = useState(false);
  const [imageUp,setImageUp] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changeImg = (e) =>{
    setImageUp(e.target.files[0]);
    console.log(e.target.files[0]);
  }
  const upload = () =>{
    let formData = new FormData();
    formData.append('image',imageUp);
    axios(
     {
      url:'http://127.0.0.1:8000/api/upload',
      method:'post',
      data: formData
     } 
    ).then(
      (res)=>{
      }
    );
    setShow(false);
  }
  return (
    <Form style={{ display:'inline' }}>
      <Button variant="light" onClick={handleShow}>
        Thêm sản phẩm
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm mới sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
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
            <Form.Group controlId="formFile" className="mb-3">
               <Form.Label>Default file input example</Form.Label>
               <Form.Control type="file" onChange={changeImg}/>
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Thêm ảnh mô tả</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
             */}
            <Forms/>
            <UploadDetail/>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ borderRadius:'10px', borderColor:'lightblue' }} variant="light" onClick={handleClose}>
            Hủy
          </Button>
          <Button style={{ borderRadius:'10px', borderColor:'lightblue',color:'white'}} variant="primary" onClick={upload}>
            Thêm
          </Button>
        </Modal.Footer>
      </Modal>
      </Form>
  );
}

export default ModalBootstrap;