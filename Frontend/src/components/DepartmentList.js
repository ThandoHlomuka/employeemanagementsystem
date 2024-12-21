import React from 'react';

const DepartmentList = ({ departments }) => {
  return (
    <div>
      <h2>Department List</h2>
      <ul>
        {departments.map((department) => (
          <li key={department._id}>
            {department.name} - {department.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentList;
