import React, { useState } from 'react';
import axios from 'axios';

const DepartmentForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/departments', { name, description });
      alert('Department added successfully');
    } catch (error) {
      alert('Error adding department');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Department</h2>
      <input
        type="text"
        placeholder="Department Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Department</button>
    </form>
  );
};

export default DepartmentForm;
