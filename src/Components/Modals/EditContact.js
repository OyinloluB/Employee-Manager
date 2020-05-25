import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const EditContact = ({
  show,
  setShow,
  states,
  setEmployees,
  employees,
  currentEmployeeIndex,
}) => {
  const [cities, setCities] = useState(states.length > 0 ? states[0].lgas : []);
  const [formDetails, setFormDetails] = useState(
    employees[currentEmployeeIndex]
  );

  const {
    firstname,
    lastname,
    email,
    phonenumber,
    role,
    streetnumber,
    state,
    city,
  } = formDetails;

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const handleStateChange = (e) => {
    const newStateIndex = e.target.value;
    setFormDetails({ ...formDetails, state: states[newStateIndex].state });
    setCities(states[newStateIndex].lgas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployees = [...employees];
    updatedEmployees[currentEmployeeIndex] = { ...formDetails };
    setEmployees(updatedEmployees);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header>Edit Contact</Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Control
                defaultValue={firstname}
                placeholder="First name"
                type="text"
                name="firstname"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Control
                defaultValue={lastname}
                placeholder="Last name"
                type="text"
                name="lastname"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Form.Control
                defaultValue={email}
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Control
                defaultValue={phonenumber}
                placeholder="Phone Number"
                type="number"
                name="phonenumber"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Form.Control
                defaultValue={role}
                placeholder="Role"
                type="text"
                name="role"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Control
                defaultValue={streetnumber}
                placeholder="Street Number"
                type="number"
                name="streetnumber"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <br />
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>State</Form.Label>
            <Form.Control
              defaultValue={states.findIndex(
                (savedState) => savedState.state === state
              )}
              as="select"
              custom
              name="state"
              onChange={handleStateChange}
            >
              {states.map((state, index) => (
                <option value={index} key={state.state}>
                  {state.state}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Cities</Form.Label>
            <Form.Control
              defaultValue={city}
              as="select"
              custom
              onChange={handleChange}
              name="city"
            >
              {cities.map((city) => (
                <option value={city} key={city}>
                  {city}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            type="submit"
            style={{
              padding: "10px",
            }}
          >
            Edit Contact
          </Button>
          <Button
            variant="secondary"
            type="submit"
            style={{
              padding: "10px",
            }}
            onClick={() => {
              handleClose();
            }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditContact;
