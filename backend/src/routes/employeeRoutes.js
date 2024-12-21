const express = require('express');
const { createEmployee, getEmployees, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/', authMiddleware, roleMiddleware (['admin', 'manager']), createEmployee);
router.get('/', authMiddleware, getEmployees);
router.put('/:id' authMiddleware,  roleMiddleware (['admin', 'manager']), updateEmployee);
router.delete('/:id', authMiddleware,  roleMiddleware (['admin', 'manager']) deleteEmployee);

module.exports = router;
