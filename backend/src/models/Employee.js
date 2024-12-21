const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    Division: { type: String, enum: ['sales', 'IT', 'marketing', 'executive', 'managerial', ], default: 'executive' },
    dateOfJoining: { type: Date, default: Date.now },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
