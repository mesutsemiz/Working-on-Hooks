import React from 'react';
import { createContext, useReducer , useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  // const [employees, setEmployees] = useState([
  //   {
  //     id: uuidv4(),
  //     name: "Brent O'Neill",
  //     email: 'erat.vitae@icloud.org',
  //     phone: '(810) 544-8385',
  //     address: 'Ap #811-2315 Cras Av.',
  //   },
  //   {
  //     id: uuidv4(),
  //     name: 'Steel Hardin',
  //     email: 'sed.nulla@icloud.net',
  //     phone: '(786) 565-5158',
  //     address: 'Ap #899-3755 Magna. St.',
  //   },
  //   {
  //     id: uuidv4(),
  //     name: 'Zephr Gilliam',
  //     email: 'erat@hotmail.net',
  //     phone: '1-618-954-1461',
  //     address: 'Ap #129-7011 Ac, Avenue',
  //   },
  //   {
  //     id: uuidv4(),
  //     name: 'Karina Workman',
  //     email: 'sem.consequat.nec@outlook.edu',
  //     phone: '1-972-498-3566',
  //     address: 'Ap #610-7541 Taciti St.',
  //   },
  //   {
  //     id: uuidv4(),
  //     name: 'Joshua Head',
  //     email: 'luctus.vulputate@icloud.ca',
  //     phone: '(287) 781-6946',
  //     address: 'P.O. Box 900, 8613 Egestas. Rd.',
  //   },
  // ]);

  const reducer = (employees, action) =>{
    switch(action.type){
      case "add_employee":
        return [...employees, {
          id:uuidv4(),
          name:action.employee.name,
          email:action.employee.email,
          phone:action.employee.phone,
          address:action.employee.address
        }]

      case "remove_employee":
        return employees.filter(item=>item.id !== action.id)

      case "update_employee":
        return employees.map((employee)=>(
          employee.id === action.id ? action.updatedEmployee :employee
        ))

        default:
          return employees;
    }
  }

 const [employees, dispatch] = useReducer(reducer,[
  {
    id: uuidv4(),
    name: "Brent O'Neill",
    email: 'erat.vitae@icloud.org',
    phone: '(810) 544-8385',
    address: 'Ap #811-2315 Cras Av.',
  },
  {
    id: uuidv4(),
    name: 'Steel Hardin',
    email: 'sed.nulla@icloud.net',
    phone: '(786) 565-5158',
    address: 'Ap #899-3755 Magna. St.',
  },
  {
    id: uuidv4(),
    name: 'Zephr Gilliam',
    email: 'erat@hotmail.net',
    phone: '1-618-954-1461',
    address: 'Ap #129-7011 Ac, Avenue',
  },
  {
    id: uuidv4(),
    name: 'Karina Workman',
    email: 'sem.consequat.nec@outlook.edu',
    phone: '1-972-498-3566',
    address: 'Ap #610-7541 Taciti St.',
  },
  {
    id: uuidv4(),
    name: 'Joshua Head',
    email: 'luctus.vulputate@icloud.ca',
    phone: '(287) 781-6946',
    address: 'P.O. Box 900, 8613 Egestas. Rd.',
  },
],
()=>{
  const employees= localStorage.getItem("employees")

  return employees ? JSON.parse(employees) : [];
}
)


  useEffect(()=>{
    localStorage.setItem("employees", JSON.stringify(employees))
  })

  const sortedEmployees=employees.sort((a,b)=>a.name.localeCompare(b.name))

  // const addEmployee=(name, email, address,phone)=>{
  //   setEmployees([...employees, {id:uuidv4(),name, email,phone,address}])

  // }

  // const deleteEmployee = (id)=>{
  //   setEmployees(employees.filter(item=>item.id !==id))
  // }

  // const updateEmployee=(id,updatedEmployee) =>{
  //   setEmployees(employees.map((employee)=>(
  //     employee.id === id ? updatedEmployee :employee
  //   )))
  // }

  return (
    <EmployeeContext.Provider value={{ sortedEmployees,dispatch}}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;