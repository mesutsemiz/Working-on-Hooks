import React, { useContext,useState,useEffect } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
import { Button, Modal } from 'react-bootstrap';
import EditForm from "./EditForm"

const Employee = ({ employee }) => {
  const[show, setShow]=useState(false)
  const { dispatch } = useContext(EmployeeContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    handleClose()
  },[employee])

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <button onClick={handleShow} className="btn text-success" data-toggle="modal">
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </button>
        <button
          onClick={() => dispatch({type:"remove_employee", id:employee.id})}
          className="btn text-danger"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>

      <Modal show={show}>
        <Modal.Header className="modal-header" closeButton onClick={handleClose}>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <EditForm theEmployee={employee}/>
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
         
            className="modal-button"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;
