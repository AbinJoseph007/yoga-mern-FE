import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add your reviews
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>FEEDBACK</Modal.Title>
        </Modal.Header>
        <div className='mb-3 ms-2 me-2'>
         <textarea type="text" className='form-control' placeholder='add your feedback'  />
         </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            add review
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;