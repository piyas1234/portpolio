import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

const ModalLg = ({data}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {id, name , img , livesite , gitlink, description} = data;
  return (
    
    <>
      <button className="btn-sm btn btn-primary" onClick={handleShow}>
        View Details
      </button>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        animation={false}
        
      >
         <div className="bg-dark">
         <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> 

        <div className="row p-5">
        <img width="100%"  src={img} alt="" srcset=""/>
         
        <div className="m-4">
        <h2 className="text-primary">Project name is {name}</h2>
        <a  href={gitlink} className="btn btn-sm btn-primary" type="submit">Github</a>
         <a href={livesite} className="btn btn-sm btn-outline-warning" type="submit">Live Site</a>
        
        </div>
        <div className="p-4">
          {description}
        </div>
         </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
         </div>
      </Modal>
    </>
  );
};

export default ModalLg;
