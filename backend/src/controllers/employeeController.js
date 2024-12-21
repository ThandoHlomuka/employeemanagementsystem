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
