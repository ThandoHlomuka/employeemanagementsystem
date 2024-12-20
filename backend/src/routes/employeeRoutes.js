const express = require('express');
const { createEmployee, getEmployees, getFilteredEmployees, getAllEmployees, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/', authMiddleware, roleMiddleware (['admin', 'executive', 'manager']), createEmployee);
router.get('/', authMiddleware, getEmployees);
router.get('/', authMiddleware, getFilteredEmployees);
router.get('/all', authMiddleware, getAllEmployees);
router.put('/:id' authMiddleware,  roleMiddleware (['admin', 'executive', 'manager']), updateEmployee);
router.delete('/:id', authMiddleware,  roleMiddleware (['admin', 'executive', 'manager']) deleteEmployee);

module.exports = router;
