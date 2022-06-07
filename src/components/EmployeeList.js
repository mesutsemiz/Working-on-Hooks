import React, { useContext, useState, useEffect } from 'react';
import Employee from './Employee';
import { EmployeeContext } from '../context/EmployeeContext';
import { Button, Modal, Alert } from 'react-bootstrap';
import AddForm from './AddForm';
import '../index.css';

import Pagination from "./Pagination"

const EmployeeList = () => {
  const { sortedEmployees } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
const [currentPage, setCurrentPage] = useState(1)
const [employeesPerPage,seEmployeesPerPage] =useState(3)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const handleShowAlert = () => setShowAlert(true);

  const handleShowAlert=()=>{
    setShowAlert(true)
    setTimeout(()=>{
      setShowAlert(false)
    },3000)
  }

  useEffect(() => {
    handleClose();

    return ()=>handleShowAlert();

  }, [sortedEmployees]);

  const indexOfLastEmployee= currentPage * employeesPerPage
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage
  const currentEmployees=sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee)
  const totalPagesNum = Math.ceil(sortedEmployees.length/employeesPerPage)

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b></b>Employees
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              variant="primary"
              onClick={handleShow}
              className="btn btn-success text-white"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{' '}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>

      <Alert
        show={showAlert}
        variant="success"
       
      >
        employye list succesfully updated
      </Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr>
              <Employee employee={employee} />
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton={handleClose}>
          <Modal.Title>Add employee</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <AddForm />
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button
            variant="secondary"
            onClick={handleClose}
            className="modal-button"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            className="modal-button"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage}/>
    </>
  );
};

export default EmployeeList;

//SORT METHOD

// sort((a,b)=>a.name.localeCompare(b.name))

//sort((a,b)=>a.name.localeCompare(b.name))
