import Axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function EditNewItem() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");
    
    function editNewItem() {
        console.log("this is function")
        Axios.post("http://18.222.29.245/api/items/UpdateItem",{
            "_id" : id,
            "name" : name,
            "description" : description,
            "price" : price,
            "status" : status,
        }).then((response) =>{
            alert("New Item added")
        });
    }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add New Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editNewItem}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" placeholder="item" autoFocus value={name} onChange={(e)=> setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Price" value={price} onChange={(e)=> setPrice(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={description} onChange={(e)=> setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Status</Form.Label>
                <Form.Select  onChange={(e)=> setStatus(e.target.value)}>
                <option value={status}>Available</option>
                <option value={status}>Sold Out</option>
              </Form.Select>
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type='submit' variant="primary">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default EditNewItem