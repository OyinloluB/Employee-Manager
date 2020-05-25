import React from "react";
import { Form } from "react-bootstrap";
import "./form.css";

const FilterSelect = ({ setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <Form>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Control as="select" custom onChange={handleFilterChange}>
          <option value="">Search By</option>
          <option value="firstname">First Name</option>
          <option value="lastname">Last Name</option>
          <option value="email">Email</option>
          <option value="phonenumber">Phone Number</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default FilterSelect;
