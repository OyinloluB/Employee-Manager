import React, { useState, useEffect } from "react";
import { NavBar } from "./NavBar";
import ContactTable from "./ContactTable";
import Actions from "./Actions";

const Dashboard = () => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetch("http://locationsng-api.herokuapp.com/api/v1/lgas")
      .then((res) => res.json())
      .then((res) => {
        setStates(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const [employees, setEmployees] = useState([
    {
      firstname: "Timi",
      lastname: "Timi",
      email: "Timi",
      phonenumber: "000",
      role: "Developer",
      streetnumber: "0",
      state: "Lagos",
      city: "Ikorodu",
      id: 1,
    },
    {
      firstname: "Chima",
      lastname: "Timi",
      email: "bisi@gmail.com",
      phonenumber: "000",
      role: "Timi",
      streetnumber: "0",
      state: "Anambra",
      city: "Ikorodu",
      id: 1,
    },
    {
      firstname: "Timi",
      lastname: "Timi",
      email: "Timi",
      phonenumber: "000",
      role: "Developer",
      streetnumber: "0",
      state: "Lagos",
      city: "Ikorodu",
      id: 1,
    },
    {
      firstname: "Timi",
      lastname: "Timi",
      email: "Timi",
      phonenumber: "000",
      role: "Timi",
      streetnumber: "0",
      state: "Anambra",
      city: "Ikorodu",
      id: 1,
    },
  ]);

  const [filter, setFilter] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const handleSearchChange = (e) => {
    let filterCondition;
    if (filter !== "") {
      console.log(filter);
      filterCondition = (employee, value) => {
        console.log(employee);
        console.log(value);
        return employee[filter].toLowerCase().includes(value.toLowerCase());
      };
    } else {
      filterCondition = (employee, value) => {
        return Object.keys(employee).reduce((accumulator, employeeKey) => {
          return (
            accumulator ||
            employee[employeeKey].toLowerCase().includes(value.toLowerCase())
          );
        }, false);
      };
    }
    const filteredEmployees =
      e.target.value !== ""
        ? employees.filter((employee) => {
            return filterCondition(employee, e.target.value);
          })
        : employees;
    setFilteredEmployees(filteredEmployees);
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <NavBar />
      <Actions
        setEmployees={setEmployees}
        employees={employees}
        states={states}
        handleSearchChange={handleSearchChange}
        setFilter={setFilter}
      />
      <ContactTable
        employees={filteredEmployees}
        setEmployees={setEmployees}
        deleteEmployee={deleteEmployee}
        states={states}
      />
    </div>
  );
};

export default Dashboard;
