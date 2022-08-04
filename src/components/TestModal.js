import React,{useState} from "react";
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import FormAdd from "./FormAdd";

function TestModal() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <Button type="light" onClick={showModal}>
        Thêm sản phẩm
      </Button>
      <Modal
        title="Thêm sản phẩm"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {/* <p>{modalText}</p> */}
        <FormAdd/>
      </Modal>
    </>
  );
};

export default TestModal;