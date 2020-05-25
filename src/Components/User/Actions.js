import React, { useState } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import AddContact from "../Modals/AddContact";
import Search from "./Search";
import FilterSelect from "./FilterSelect";

const Actions = ({
  setEmployees,
  employees,
  states,
  setFilter,
  handleSearchChange,
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show ? (
        <AddContact
          setShow={setShow}
          show={show}
          states={states}
          setEmployees={setEmployees}
          employees={employees}
        />
      ) : null}
      <div
        style={{
          marginTop: "15vh",
          marginBottom: "5vh",
        }}
      >
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto search">
              <Search handleSearchChange={handleSearchChange} />
              &nbsp;
              <FilterSelect setFilter={setFilter} />
            </Nav>
            <Nav
              className="flexActions"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "3vh",
              }}
            >
              <Button onClick={() => setShow(true)}>Add Contact</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Actions;
