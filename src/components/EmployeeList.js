import React, { useState } from 'react';
import Employee from './Employee';
const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Brent O'Neill",
      email: 'erat.vitae@icloud.org',
      phone: '(810) 544-8385',
      address: 'Ap #811-2315 Cras Av.',
    },
    {
      id: 2,
      name: 'Steel Hardin',
      email: 'sed.nulla@icloud.net',
      phone: '(786) 565-5158',
      address: 'Ap #899-3755 Magna. St.',
    },
    {
      id: 3,
      name: 'Zephr Gilliam',
      email: 'erat@hotmail.net',
      phone: '1-618-954-1461',
      address: 'Ap #129-7011 Ac, Avenue',
    },
    {
      id: 4,
      name: 'Karina Workman',
      email: 'sem.consequat.nec@outlook.edu',
      phone: '1-972-498-3566',
      address: 'Ap #610-7541 Taciti St.',
    },
    {
      id: 5,
      name: 'Joshua Head',
      email: 'luctus.vulputate@icloud.ca',
      phone: '(287) 781-6946',
      address: 'P.O. Box 900, 8613 Egestas. Rd.',
    },
  ]);

  return (
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
        <Employee employees={employees} />
      </tbody>
    </table>
  );
};

export default EmployeeList;
