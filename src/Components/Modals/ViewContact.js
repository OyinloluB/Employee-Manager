import React from "react";
import { Modal, Button } from "react-bootstrap";

const ViewContact = ({ showSingleContact, setShowSingleContact, employee }) => {
  const handleClose = () => setShowSingleContact(false);

  return (
    <>
      <Modal show={showSingleContact} onHide={handleClose} backdrop="static">
        <Modal.Header>
          <Modal.Title>
            {employee.firstname} {employee.lastname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>Name: </b>
            {employee.firstname} {employee.lastname}
          </p>
          <p>
            <b>Email:</b> {employee.email}
          </p>
          <p>
            <b>Phone Number:</b> {employee.phonenumber}
          </p>
          <p>
            <b>Role:</b>
            {employee.role}
          </p>
          <p>
            <b>Address:</b> {employee.streetnumber}, {employee.city}.{" "}
            {employee.state}.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              width: "184px",
              padding: "10px",
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewContact;
