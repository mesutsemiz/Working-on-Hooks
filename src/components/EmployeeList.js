import React, { useContext,useState,useEffect} from 'react';
import Employee from './Employee';
import { EmployeeContext } from '../context/EmployeeContext';
import { Button, Modal } from 'react-bootstrap';
import AddForm from './AddForm';
import "../index.css"

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(()=>{
    handleClose()
  },[employees])





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
         {
           employees.map((employee)=>(
             <tr>
                <Employee employee={employee} />
             </tr>
           ))
         }
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton={handleClose}>
          <Modal.Title>Add employee</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <AddForm />
        </Modal.Body>
        <Modal.Footer  className="modal-footer">
          <Button variant="secondary" onClick={handleClose}  className="modal-button">
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} className="modal-button">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  );
};

export default EmployeeList;
