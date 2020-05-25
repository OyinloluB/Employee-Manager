import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const AddContact = ({ show, setShow, states, setEmployees, employees }) => {
  const [cities, setCities] = useState(states.length > 0 ? states[0].lgas : []);
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    role: "",
    streetnumber: "",
    state: "",
    city: "",
  });
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

  const [warning, setWarning] = useState(false);

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
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      phonenumber === "" ||
      role === "" ||
      streetnumber === "" ||
      state === "" ||
      city === ""
    ) {
      setWarning(true);
    } else {
      setEmployees([
        ...employees,
        { ...formDetails, id: employees.length + 1 },
      ]);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header>Add Contact</Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {warning ? (
            <p
              style={{
                border: "1px solid red",
                backgroundColor: "red",
                color: "white",
                padding: "5px 10px 5px 10px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Invalid details
              <span
                style={{
                  cursor: "pointer",
                }}
                onClick={() => setWarning(false)}
              >
                x
              </span>
            </p>
          ) : null}
          <Row>
            <Col>
              <Form.Control
                placeholder="First name"
                type="text"
                name="firstname"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Control
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
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Control
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
                placeholder="Role"
                type="text"
                name="role"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Control
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
            Add Contact
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

export default AddContact;
