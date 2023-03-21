import React, { useState, useEffect } from "react";
import axios from "axios";

function PayrollApp() {
  const [employees, setEmployees] = useState([]);
  const [salaryData, setSalaryData] = useState([]);

  useEffect(() => {
    axios.get("/api/employees").then((res) => setEmployees(res.data));
  }, []);

  const handleCalculateSalary = (employee) => {
    axios
      .post("/api/salary", { employeeId: employee._id })
      .then((res) => setSalaryData(res.data));
  };

  return (
    <div>
      <h1>Payroll App</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hourly Rate</th>
            <th>Hours Worked</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.hourlyRate}</td>
              <td>{employee.hoursWorked}</td>
              <td>
                <button onClick={() => handleCalculateSalary(employee)}>
                  Calculate Salary
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {salaryData.map((data) => (
          <div key={data._id}>
            <h2>{data.employee.name}'s Salary:</h2>
            <p>Base Salary: {data.baseSalary}</p>
            <p>Tax Deductions: {data.taxDeductions}</p>
            <p>Total Salary: {data.totalSalary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PayrollApp;
