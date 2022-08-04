import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalBootstrap() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Form>
      <Button variant="light" onClick={handleShow}>
        Thêm sản phẩm
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm mới sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                <Form.Control type="email" placeholder="Nhập mô tả" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Form>
  );
}

export default ModalBootstrap;