import React, { useState } from 'react';
import axios from 'axios';

const EmployeeSearch = () => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [position, setPosition] = useState('');
    const [status, setStatus] = useState('');
    const [employees, setEmployees] = useState([]);

    const handleSearch = async () => {
        const response = await axios.get('/api/employees', {
            params: { name, department, position, status }
        });
        setEmployees(response.data);
    };

    return (
        <div>
            <h2>Search Employees</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="
