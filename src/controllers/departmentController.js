const Department = require('../models/Department');

exports.createDepartment = async (req, res) => {
    const newDepartment = new Department(req.body);
    await newDepartment.save();
    res.status(201).json(newDepartment);
};

exports.getDepartments = async (req, res) => {
    const departments = await Department.find();
    res.json(departments);
};

exports.updateDepartment = async (req, res) => {
    const { id } = req.params;
    const updatedDepartment = await Department.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedDepartment);
};

exports.deleteDepartment = async (req, res) => {
    const { id } = req.params;
    await Department.findByIdAndDelete(id);
    res.status(204).send();
};
