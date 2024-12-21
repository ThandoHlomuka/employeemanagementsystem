import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeList from '../components/EmployeeList';
import DepartmentList from '../components/DepartmentList';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await axios.get('/api/employees');
      setEmployees(res.data);
    };

    const fetchDepartments = async () => {
      const res = await axios.get('/api/departments');
      setDepartments(res.data);
    };

    fetchEmployees();
    fetchDepartments();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <EmployeeList employees={employees} />
      <DepartmentList departments={departments} />
    </div>
  );
};

export default Dashboard;
