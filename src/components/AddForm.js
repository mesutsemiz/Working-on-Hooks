import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
const AddForm = () => {
  const { dispatch } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const { name, phone, address, email } = newEmployee;

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addEmployee(name, email, address, phone);
    dispatch({type:"add_employee", employee: {
      name,email,address,phone
    }})
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name*"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email*"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address*"
          name="address"
          value={address}
          onChange={(e) => onInputChange(e)}
          row={3}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="tex"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>

      <Button variant="success" type="submit" block>
        Add new Employee
      </Button>
    </Form>
  );
};

export default AddForm;
