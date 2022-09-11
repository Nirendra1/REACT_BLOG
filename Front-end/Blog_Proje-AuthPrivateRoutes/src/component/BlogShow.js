import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

const BlogShow = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [modal, setmodal] = useState(false);
  return (
    <div>
      <Modal size='lg'
        isOpen={modal}
        toggle={() => setmodal(!modal)}
      >
        <ModalHeader toggle={() => setmodal(!modal)}>
          
          popup
    </ModalHeader>
        <ModalBody>
        <div className="container">
        <input type="file" className="form-control form-control-lg" id="photo" name="photo" accept="image/*" onChange={(e) => setImage(e.target.value)} /><br />
        <input type="text" className="form-control form-control-lg" placeholder="Post title" onChange={(e) => setTitle(e.target.value)} /><br />
        <textarea type="text" className="form-control form-control-lg" placeholder="Post Description" onChange={(e) => setDescription(e.target.value)} /><br />
        <button className="btn btn-dark btn-lg btn-block" id="inputBlog" type="button" onClick={''}>Login</button>
    </div>
        </ModalBody>
      </Modal>
      <button className="btn btn-primary" onClick={() => setmodal(true)}>popup Modal</button>
    </div>
  );
}

export default BlogShow;

