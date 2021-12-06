import { Modal, Button, Input, Form, message } from 'antd';
import React, { useState } from 'react';

export default function SaveAsModal({ hover, setHover }) {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const showModal = () => {
    setName('');
    setDescription('');
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    message.success('Saved!');
    setVisible(false);
  };

  return (
    <div id='link'>
      <i
        onClick={showModal}
        className='flex fas fa-file-download'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      {hover && <div className='popup ModalCompile4'>SaveAs</div>}
      <Modal
        title='Save As'
        visible={visible}
        onCancel={handleCancel}
        width='25vw'
        footer={[
          <Button key='calcel' type='primary' onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key='ok' type='primary' onClick={handleOk}>
            Save
          </Button>,
        ]}
      >
        <Form
          layout='horizontal'
          size='default'
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 14,
          }}
          onFinish={handleOk}
        >
          <Form.Item label='Workspace Name: '>
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type='text'
              placeholder='Enter workspace name'
              required
            ></Input>
          </Form.Item>
          <Form.Item label='Description: '>
            <Input.TextArea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type='text'
              placeholder='Enter description'
              required
            ></Input.TextArea>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
