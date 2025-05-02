const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// GET doctors (with optional filters)
router.get('/', doctorController.listDoctors);

// POST new doctor (requires all fields)
router.post('/', doctorController.addDoctor);

module.exports = router;