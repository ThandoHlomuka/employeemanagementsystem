const Employee = require('../models/Employee');

exports.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json(newEmployee);
};

exports.getEmployees = async (req, res) => {
    const employees = await Employee.find().populate('department');
    res.json(employees);
};

exports.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedEmployee);
};

exports.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.status(204).send();
};

// Function to get employees with search and filter
exports.getEmployees = async (req, res) => {
    try {
        const { name, department, position, status } = req.query;

        // Build the query object
        const query = {};
        if (name) {
            query.name = { $regex: name, $options: 'i' }; // Case-insensitive search
        }
        if (department) {
            query.department = department;
        }
        if (position) {
            query.position = position;
        }
        if (status) {
            query.status = status;
        }

        // Fetch employees based on the query
        const employees = await Employee.find(query);
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
