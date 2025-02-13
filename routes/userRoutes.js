const express = require('express');
const { registerUser, loginUser, searchUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { validateRequest } = require('../middleware/validateMiddleware');
const { registerSchema, loginSchema } = require('../validators/userValidator');

const router = express.Router();

// Registration route with validation
router.post('/register', validateRequest(registerSchema), registerUser);

// Login route with validation
router.post('/login', validateRequest(loginSchema), loginUser);

// Search user route (Protected)
router.get('/search', protect, searchUser);

module.exports = router;
