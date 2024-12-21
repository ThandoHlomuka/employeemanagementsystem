const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    dateOfJoining: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
