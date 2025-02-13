const jwt = require('jsonwebtoken');
const User = require('../models/User');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with token and user details
    res.status(200).json({
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        gender: user.gender,
        dateOfBirth: user.dateOfBirth,
        country: user.country,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const registerUser = async (req, res) => {
  const { username, email, password, fullName, gender, dateOfBirth, country } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ $or: [{ username }, { email }] });
    if (userExists) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    // Create new user
    const user = await User.create({
      username,
      email,
      password,
      fullName,
      gender,
      dateOfBirth,
      country,
    });

    // Respond with user details (excluding the password)
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
      country: user.country,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const searchUser = async (req, res) => {
    const { username, email } = req.query; // Query parameters for search
  
    try {
      // Find user by username or email
      const user = await User.findOne({ $or: [{ username }, { email }] });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return user details (excluding password)
      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        gender: user.gender,
        dateOfBirth: user.dateOfBirth,
        country: user.country,
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { registerUser, loginUser, searchUser };
  
