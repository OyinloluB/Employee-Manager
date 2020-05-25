import React from "react";
import { Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <img
            alt=""
            src="https://brand-mobile-assets.s3-eu-west-1.amazonaws.com/Logo+(1).png"
            width="80"
            height="70"
            className="d-inline-block align-top"
          />{" "}
          <h6>
            Hello,{" "}
            <span
              style={{
                color: "#52F1EC",
              }}
            >
              John Doe
            </span>
          </h6>
        </Navbar.Brand>
      </Navbar>
    </>
  );
};
