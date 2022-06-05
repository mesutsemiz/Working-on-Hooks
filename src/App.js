import React from "react";
import "./index.css";
import EmployeeList from "./components/EmployeeList"


export default function App() {
  return (
    <div className="App">

      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
          <div className="table-title">
          <div className="row">
          <div className="col-sm-6">
<h2>Manage <b></b>Employees</h2>
</div>
<div className="col-sm-6">
						<a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>					
					</div>
          </div>
          </div>
              <EmployeeList />
      
          </div>
        </div>
      </div>
    </div>
    
    
   
  );
}
